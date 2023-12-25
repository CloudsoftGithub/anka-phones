import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="foot" className='section-bg text-center foot shadow-lg fixed-bottom'>
    <div class="container ">
      <div class="copyright">
        &copy; Copyright
        <strong>
          <span> Anka Phones</span>
        </strong>
        . All Rights Reserved
      </div>
      <div class="credits">
        Designed by<a href="/"> CloudSoft Consulting Ltd</a>
      </div>
    </div> 
  </footer>
  )
}
