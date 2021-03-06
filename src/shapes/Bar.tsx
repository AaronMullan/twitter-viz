// eslint-disable-next-line
import React from 'react';
import cx from 'classnames';
import { AddSVGProps } from '../types/base';

export type BarProps = {
  /** className to apply to rect element. */
  className?: string;
  /** reference to rect element. */
  innerRef?: React.Ref<SVGRectElement>;
};

export default function Bar({
  className,
  innerRef,
  ...restProps
}: AddSVGProps<BarProps, SVGRectElement>) {
  return <rect 
  // ref={ } 
  className = { cx('visx-bar', className) } {...restProps } />;
}