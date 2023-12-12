/**
 * Copyright (c) Flashbots Ltd. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {Children, ReactNode} from 'react';

interface ListProps {
  children: ReactNode;
}

function List({children}: ListProps) {
  const listItems = Children.toArray(children);

  return (
    <div className="mb-8 mt-8">
      {listItems.map((child, index) => (
        <div key="list-child" className="flex flex-row">
          <div className="my-2 h-7 w-7 rounded-full border-double text-center font-bold leading-[23px]">
            {`${index + 1}`}
          </div>
          <div className="my-2 ml-3 w-full last:mb-0 only:mb-0">{child}</div>
        </div>
      ))}
    </div>
  );
}

export default List;
