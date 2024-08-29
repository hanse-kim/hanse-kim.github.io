const getCodeBlockLanguageLabelContentStyle = ([
  language,
  label,
  isNotProgrammingLanguage,
]: [string, string, boolean]) => `
 .gatsby-highlight pre.language-${language}::after {
    content: "${label ?? language}";
    ${
      isNotProgrammingLanguage
        ? 'background-color: hsl(var(--twc-text-quote))'
        : ''
    }
  }
`;

const languageList: [string, string, boolean][] = [
  ['javascript', 'JavaScript', false],
  ['typescript', 'TypeScript', false],
  ['jsx', 'JSX', false],
  ['tsx', 'TSX', false],
  ['shell', 'Shell', true],
  ['text', 'Text', true],
  ['css', 'CSS', true],
  ['html', 'HTML', true],
  ['markdown', 'Markdown', true],
  ['java', 'Java', false],
];

export const prismTheme = `
  /*
 Solarized Color Schemes originally by Ethan Schoonover
 http://ethanschoonover.com/solarized

 Ported for PrismJS by Hector Matos
 Website: https://krakendev.io
 Twitter Handle: https://twitter.com/allonsykraken)
*/

  /*
SOLARIZED HEX
--------- -------
base03    #002b36
base02    #073642
base01    #586e75
base00    #657b83
base0     #839496
base1     #93a1a1
base2     #eee8d5
base3     #fdf6e3
yellow    #b58900
orange    #cb4b16
red       #dc322f
magenta   #d33682
violet    #6c71c4
blue      #268bd2
cyan      #2aa198
green     #859900
*/

  code[class*='language-'],
  pre[class*='language-'] {
    color: #657b83; /* base00 */
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 0.95em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;

    line-height: 1.2;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    background: #073642; /* base02 */
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1.5em 1em;
    overflow: auto;
    border-radius: 0.3em;
    position: relative;
    background-color: hsl(var(--twc-bg-footer));
    border: 1px solid hsl(var(--twc-border));
  }

  :not(pre) > code[class*='language-'] {
    background-color: #fdf6e3; /* base3 */
  }

  .gatsby-highlight pre[class*='language-']::after {
    background-color: hsl(var(--twc-main));
    border-radius: 0px 0px 4px 4px;
    color: hsl(var(--twc-bg));
    font-size: 0.75rem;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
      monospace;
    letter-spacing: 0.075em;
    line-height: 1;
    padding: 0.25rem 0.5rem;
    position: absolute;
    left: 1.5rem;
    text-align: right;
    top: 0;
  }

  ${languageList.map(getCodeBlockLanguageLabelContentStyle).join('\n')};

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #93a1a1; /* base1 */
  }

  .token.punctuation {
    color: #586e75; /* base01 */
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #268bd2; /* blue */
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.url,
  .token.inserted {
    color: #2aa198; /* cyan */
  }

  .token.entity {
    color: #657b83; /* base00 */
    background: #eee8d5; /* base2 */
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #859900; /* green */
  }

  .token.function,
  .token.class-name {
    color: #b58900; /* yellow */
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #cb4b16; /* orange */
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  pre[class*='language-'].line-numbers {
    position: relative;
    padding-left: 3.5em;
    counter-reset: linenumber;
  }

  pre[class*='language-'].line-numbers > code {
    position: relative;
    white-space: inherit;
  }

  .line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: -3.8em;
    padding: 1.5em 0 1.5em 1em;
    width: 3em; /* works for line-numbers below 1000 lines */
    letter-spacing: -1px;
    border-right: 1px solid #999;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .line-numbers-rows > span {
    display: block;
    counter-increment: linenumber;
  }

  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: #999;
    display: block;
    padding-right: 0.8em;
    text-align: right;
  }
`;
