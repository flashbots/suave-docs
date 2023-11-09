/**
 * Copyright (c) Flashbots Ltd. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {ReactNode} from 'react';
import styles from './styles.module.css';

interface IGrid {
  children: ReactNode | ReactNode[];
}

function Grid({children}: IGrid) {
  return <section className={styles.root}>{children}</section>;
}

export default Grid;
