import React from 'react';
import { useParams } from 'react-router-dom';

export default function Generation () {
  const { id } = useParams();
  return (
    <>
      { id }
    </>
  )
}; 