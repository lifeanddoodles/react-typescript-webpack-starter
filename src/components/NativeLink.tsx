import React, { useCallback, useMemo, useState } from 'react'

interface NativeLinkProps {
  ariaLabel?: string
  label?: string
  icon?: JSX.Element
  url: string
  className?: string
}

const NativeLink: React.FC<NativeLinkProps> = ({
  ariaLabel,
  label,
  icon,
  url,
  className,
}) => {
  const [isHash] = useState(url.startsWith('#'))
  const externalPatterns = useMemo(() => ['http', 'mailto:', 'tel:'], [])
  const externalLinkProps = useMemo(
    () => (!isHash ? { target: '_blank', rel: 'noreferrer' } : {}),
    []
  )

  /*
   * Check if URL matches one of the protocol or attributes
   * and return match for further tests.
   */
  const hasExternalPatternMatch = useCallback(
    (url: string) => {
      return externalPatterns.some((pattern) => url.startsWith(pattern))
    },
    [externalPatterns, url]
  )

  const getUrl = useCallback((url: string) => {
    if (isHash) return url
    /*
     * Add 'https://' to avoid accidental internal links
     * in case no protocol or attribute matches were found.
     */
    if (!hasExternalPatternMatch(url)) return `https://${url}`
    return url
  }, [])

  return (
    <a
      href={getUrl(url)}
      aria-label={ariaLabel}
      {...externalLinkProps}
      className={className}
    >
      {icon && <span className="native-link__icon">{icon}</span>}
      {label ? <span className="native-link__label">{label}</span> : ''}
    </a>
  )
}

export default NativeLink
