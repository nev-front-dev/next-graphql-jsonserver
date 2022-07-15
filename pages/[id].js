import React from 'react'
import { useRouter } from 'next/router';

export default function User() {
  const router = useRouter()
  const {id} = router.query;
    console.log(id);
  return (
    <div>{id}</div>
  )
}

