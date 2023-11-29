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
              className="w-7 h-7 my-2 leading-[23px] border-double rounded-full text-center font-bold">
              {`${index + 1}`}
            </div>
            <div
              className="ml-3 my-2 w-full last:mb-0 only:mb-0">
              {child}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default List