import '../helpers/load-env.js';
/**
 *
 * @returns {*}
 */
export function getHelmetOptions () {
  const {
    CSP_DEFAULT_SRC = '\'self\'',
    CSP_BASE_URI = '\'self\'',
    CSP_MIXED_CONTENT = '',
    CSP_FONT_SRC = '\'self\'',
    CSP_FORM_ACTION = '\'self\'',
    CSP_FRAME_ANCESTORS = '\'self\'',
    CSP_OBJECT_SRC = '\'none\'',
    CSP_IMG_SRC = '\'self\' data: https:',
    CSP_SCRIPT_SRC = '\'self\' \'unsafe-inline\'',
    CSP_SCRIPT_SRC_ATTR = '\'none\'',
    CSP_STYLE_SRC = '\'self\' \'unsafe-inline\'',
    CROSS_ORIGIN_EMBEDDER_POLICY = false,
    CROSS_ORIGIN_OPENER_POLICY = 'same-origin',
    CROSS_ORIGIN_RESOURCE_POLICY = 'cross-origin',
    REFERRER_POLICY = 'no-referrer',
    HSTS_MAX_AGE = '15552000',
    HSTS_INCLUDE_SUBDOMAINS = false,
    HSTS_PRELOAD = false,
    NO_SNIFF = false,
    ORIGIN_AGENT_CLUSTER = false,
    DNS_PREFETCH_CONTROL_ALLOW = false,
    IE_NO_OPEN = false,
    FRAMEGUARD_ACTION = 'sameorigin',
    PERMITTED_CROSS_DOMAIN_POLICIES = 'none',
    HIDE_POWERED_BY = false,
    XSS_FILTER = false
  } = process.env;
  return {
    // see https://helmetjs.github.io/
    // and https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
    contentSecurityPolicy: {
      directives: {
        defaultSrc: CSP_DEFAULT_SRC.toLowerCase(),
        baseUri: CSP_BASE_URI.toLowerCase(),
        blockAllMixedContent: CSP_MIXED_CONTENT.toLowerCase(),
        fontSrc: CSP_FONT_SRC.toLowerCase(),
        formAction: CSP_FORM_ACTION.toLowerCase(),
        frameAncestors: CSP_FRAME_ANCESTORS.toLowerCase(),
        objectSrc: CSP_OBJECT_SRC.toLowerCase(),
        imgSrc: CSP_IMG_SRC.toLowerCase(),
        scriptSrc: CSP_SCRIPT_SRC.toLowerCase(),
        scriptSrcAttr: CSP_SCRIPT_SRC_ATTR.toLowerCase(),
        styleSrc: CSP_STYLE_SRC.toLowerCase()
      }
    },

    // see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy
    crossOriginEmbedderPolicy: !!CROSS_ORIGIN_EMBEDDER_POLICY,

    // same-origin-allow-popups, unsafe-none -
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy
    crossOriginOpenerPolicy: {
      policy: CROSS_ORIGIN_OPENER_POLICY.toLowerCase()
    },

    // same-origin, same-site, cross-origin
    // see https://resourcepolicy.fyi/
    crossOriginResourcePolicy: {
      policy: CROSS_ORIGIN_RESOURCE_POLICY.toLowerCase()
    },

    // see https://developer.mozilla.org/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns
    referrerPolicy: {
      policy: REFERRER_POLICY?.split(',')
        .map(/** @param {string} policy **/(policy) => policy
          .toLowerCase()
          .trim())
    },

    // see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
    hsts: {
      maxAge: parseInt(HSTS_MAX_AGE, 10),
      includeSubDomains: !!HSTS_INCLUDE_SUBDOMAINS,

      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security#preloading_strict_transport_security
      preload: !!HSTS_PRELOAD
    },

    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
    noSniff: !!NO_SNIFF,

    originAgentCluster: !!ORIGIN_AGENT_CLUSTER,

    dnsPrefetchControl: {
      allow: !!DNS_PREFETCH_CONTROL_ALLOW
    },

    ieNoOpen: !!IE_NO_OPEN,

    frameguard: {
      action: FRAMEGUARD_ACTION
    },

    permittedCrossDomainPolicies: {
      // none, master-only, by-content-type, all
      permittedPolicies: PERMITTED_CROSS_DOMAIN_POLICIES
    },

    hidePoweredBy: !!HIDE_POWERED_BY,

    xssFilter: !!XSS_FILTER
  };
}
