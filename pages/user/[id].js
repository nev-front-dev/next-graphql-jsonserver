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

// export async function getStaticPaths() {
//     const router = useRouter()
//     console.log(router.query);
//     return {
//       paths: [
//         { } // See the "paths" section below
//       ],
//       fallback: "blocking" // See the "fallback" section below
//     };
//   }
