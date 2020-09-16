import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngry,
  faFrown,
  faMeh,
  faSmile,
  faLaugh,
} from '@fortawesome/free-solid-svg-icons';

export const EmojiHeader = (groupName: string) => {
  return (
    <React.Fragment key={groupName}>
      <th className="bth align-middle scale-text">{groupName}</th>
      <th className="bth center align-middle text-center scale-text p-0">
        <FontAwesomeIcon icon={faAngry} />
      </th>
      <th className="bth center align-middle text-center scale-text p-0">
        <FontAwesomeIcon icon={faFrown} />
      </th>
      <th className="bth center align-middle text-center scale-text p-0">
        <FontAwesomeIcon icon={faMeh} />
      </th>
      <th className="bth center align-middle text-center scale-text p-0">
        <FontAwesomeIcon icon={faSmile} />
      </th>
      <th className="bth center align-middle text-center scale-text p-0">
        <FontAwesomeIcon icon={faLaugh} />
      </th>
    </React.Fragment>
  );
};

export default EmojiHeader;
