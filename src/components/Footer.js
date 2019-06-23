import React from 'react'

export default function Footer() {
    let year = new Date().getFullYear()
    return (
      <div>
        <p style={{ textAlign: 'center' }}>copyright &copy; {year}. All rights reserved.</p>
      </div>
    )
}
