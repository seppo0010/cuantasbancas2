'use client';
import dynamic from 'next/dynamic'
import React from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const NoSsr = dynamic(() => Promise.resolve((props: any) => (
  <React.Fragment>{props.children}</React.Fragment>
)), {
  ssr: false
})