import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Unsplash from 'unsplash-js';
import classnames from 'classnames';
import fetch from 'node-fetch';
import { shuffle } from 'lodash/fp';

import Flipper from '../../components/Memory/Flipper';
import Header from '../../components/Memory/Header';

const getResizedImage = raw => `${raw}&w=250&h=250&fit=crop`;

const size = 4 * 4;
const grid = [...new Array(size).keys()];
const imagesCount = 5;

const propTypes = {};
const defaultProps = {};

const DEFAULT_CELLS = grid.map((cell, id) => ({
  isOpen: false,
  isMatched: false,
  isReady: false,
  image: '',
  id,
}));

const standardizeId = index => Math.floor(index / 2) * 2;

const getOpenCells = cells => cells.filter(c => c.isOpen && !c.isMatched);
const getMatchedCells = cells => cells.filter(c => c.isMatched);

const isOpenCellsMatched = cells => {
  const openCells = getOpenCells(cells);
  if (openCells.length === 2) {
    return openCells[0].image.id === openCells[1].image.id;
  }
};
const Memory = ({}) => {
  const [cells, setCells] = useState(DEFAULT_CELLS);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/images?take=${imagesCount}`)
      .then(res => res.json())
      .then(json => {
        setIsLoading(false);
        const images = json.results.map(img => ({
          id: img.id,
          urls: img.urls,
        }));
        const updateCells = [...cells].map((cell, index) => ({
          ...cell,
          isReady: true,
          image: images[standardizeId(index) % images.length],
        }));
        setCells(shuffle(updateCells));
      });
  }, []);
  const onFlipping = id => e => {
    const openCells = getOpenCells(cells);
    const openCount = openCells.length;

    if (openCount >= 2) {
      return;
    }
    const cell = cells.find(i => i.id === id);
    cell.isOpen = !cell.isOpen;

    if (isOpenCellsMatched(cells)) {
      [openCells[0], cell].forEach(c => {
        c.isOpen = true;
        c.isMatched = true;
      });
      if (getMatchedCells(cells).length == cells.length) {
        setTimeout(() => {
          confirm('Yay you are done!');
          const updateCells = cells.map(c => ({
            ...c,
            isMatched: false,
            isOpen: false,
          }));
          setCells(shuffle(updateCells));
        }, 500);
      }
    } else if (openCount + 1 === 2) {
      setTimeout(() => {
        const openCells = getOpenCells(cells);
        openCells.forEach(c => (c.isOpen = !c.isOpen));
        setCells([...cells]);
      }, 500);
    }

    setCells([...cells]);
  };
  return (
    <>
      <Header points={getMatchedCells(cells).length} />
      <section className="grid grid-x grid-padding-x game--content">
        <div
          className={classnames('cell cell--overlay reveal-overlay', {
            'cell--visible': isLoading,
          })}
        >
          <p>Loading...</p>
        </div>
        {cells.map(cell => (
          <div
            className="cell align-center align-middle small-3 grid-x cell--game"
            key={cell.id}
          >
            <Flipper
              onFlipping={onFlipping(cell.id)}
              isOpen={cell.isOpen}
              front={<div className="cell__front-text">Open me</div>}
              back={
                cell.isReady && (
                  <img
                    className="cell__img"
                    src={getResizedImage(cell.image.urls.raw)}
                  />
                )
              }
            />
          </div>
        ))}
      </section>
    </>
  );
};
Memory.propTypes = propTypes;
Memory.defaultProps = defaultProps;
export default Memory;
