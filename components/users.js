import React from 'react'

export default function users() {
  return (
    <div>users</div>
  )
}

// export async function getStaticProps(context) {
//     const res = await fetch(`http://localhost:3000/api/users`)
//     const data = await res.json()

//     console.log(data);
//     return {
//       props: {data}, // will be passed to the page component as props
//     }
//   }
