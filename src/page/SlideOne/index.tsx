import React, { FC } from 'react'

interface IProps {}

const Component: FC<IProps> = ({}: IProps) => {
  return <div></div>
}


export default React.memo(Component);