const ContentSecurityPolicy = `
  default-src 'self' https://fonts.gstatic.com 'unsafe-eval' 'unsafe-inline';
  script-src 'self';
  style-src 'self';
  font-src 'self' data: https://fonts.gstatic.com 'unsafe-inline';
`

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  }
]

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders
      }
    ]
  }
}
