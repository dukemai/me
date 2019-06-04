import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Unsplash from 'unsplash-js';
import classnames from 'classnames';
import fetch from 'node-fetch';
import { shuffle } from 'lodash/fp';

import Flipper from '../../components/Memory/Flipper';
import Side from '../../components/Memory/Side';
import FinishModal from '../../components/Memory/FinishModal';

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

const DEFAULT_CAT = 'Cats';

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
  const [cat, setCat] = useState(DEFAULT_CAT);
  const [startTime, setStartTime] = useState(null);
  const [showFinish, setShowFinish] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/images?take=${imagesCount}&q=${cat}`)
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
  }, [cat]);
  const resetGames = () => {
    const updateCells = cells.map(c => ({
      ...c,
      isMatched: false,
      isOpen: false,
    }));
    setCells(shuffle(updateCells));
    setShowFinish(false);
    setStartTime(null);
  };
  const onFlipping = id => e => {
    if (!startTime) {
      setStartTime(new Date());
    }
    const openCells = getOpenCells(cells);
    const openCount = openCells.length;

    if (openCount >= 2) {
      return;
    }

    const cell = cells.find(i => i.id === id);
    if (cell.isMatched) {
      return;
    }
    cell.isOpen = !cell.isOpen;

    if (isOpenCellsMatched(cells)) {
      [openCells[0], cell].forEach(c => {
        c.isOpen = true;
        c.isMatched = true;
      });
      if (getMatchedCells(cells).length == cells.length) {
        setTimeout(() => {
          setShowFinish(true);
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
  const onCatChange = e => {
    setCat(e.target.value);
    resetGames();
  };
  const onPlayAgainClicked = () => {
    resetGames();
  };
  return (
    <section className="grid-x">
      <Side
        selectedCat={cat}
        points={getMatchedCells(cells).length}
        onChange={onCatChange}
        startTime={startTime}
        showFinish={showFinish}
      />
      <section className="cell medium-10 grid grid-x grid-padding-x game--content">
        <div
          className={classnames(
            'cell cell--overlay reveal-overlay align-middle align-center',
            {
              'cell--visible': isLoading,
            }
          )}
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
      {showFinish && (
        <FinishModal
          points={getMatchedCells(cells).length}
          onPlayAgainClicked={onPlayAgainClicked}
        />
      )}
    </section>
  );
};
Memory.propTypes = propTypes;
Memory.defaultProps = defaultProps;
export default Memory;
