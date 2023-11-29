import React, { Children, ReactNode } from 'react';

interface ListProps {
  children: ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  const _Children = Children.toArray(children)

  return (
    <div className="mt-8 mb-8">
      {_Children.map((child, index) => {
        return (
          <div
            key={`process-child-${index}`}
            className="flex flex-row">
            <div
              className="text-2xl w-10 min-w-10 h-10 leading-[39px] my-4 min-h-10 rounded-full text-center text-onlist bg-list">
              {`${index + 1}`}
            </div>
            <div
              className="ml-3 my-6 w-full last:mb-0 only:mb-0">
              {child}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default List