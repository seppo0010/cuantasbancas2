'use client';
import dynamic from 'next/dynamic'
import React from 'react'

export const NoSsr = dynamic(() => Promise.resolve((props: any) => (
  <React.Fragment>{props.children}</React.Fragment>
)), {
  ssr: false
})