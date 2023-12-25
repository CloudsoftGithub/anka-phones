import Link from 'next/link'
import React from 'react'

export default function LandingFooter() {
  return (
    <footer id="foot" className='section-bg text-center foot shadow-lg position-sticky'>
    <div class="container ">
      <div class="copyright">
        &copy; Copyright
        <strong>
          <span> Anka Phones</span>
        </strong>
        . All Rights Reserved
      </div>
      <div class="credits">
        <Link className='text-decoration-none text-dark' href='/create'>Designed </Link>by <a href=""> CloudSoft Consulting Ltd</a>
      </div>
    </div>
  </footer>
  )
}
