import React from 'react'
import Link from 'gatsby-link'
import TopProfile from '../components/TopProfile'
import ContentItem from '../components/ContentItem'

import ReposFile from '../repos.json'
const repositories = ReposFile.repos

function endSentence (s) {
  return (
    s[s.length - 1] === '.' ||
    s[s.length - 1] === '!' ||
    s[s.length - 1] === ',' ||
    s[s.length - 1] === '?'
      ? '' : '.'
  )
}

function byStars (a, b) {
  if (a.stars > b.stars) return -1
  if (a.stars < b.stars) return 1
  return 0
}

// weird results
function byUpdatedAt (a, b) {
  if (new Date(a.updated_at) > new Date(b.updated_at)) return -1
  if (new Date(a.updated_at) < new Date(b.updated_at)) return 1
  return 0
}

function colorFromLanguage (lang) {
  lang = lang || ''
  switch (lang) {
    case '1C Enterprise': 
      return '#814CCC' 
    case 'ABAP': 
      return '#E8274B' 
    case 'ActionScript': 
      return '#882B0F' 
    case 'Ada': 
      return '#02f88c' 
    case 'Agda': 
      return '#315665' 
    case 'AGS Script': 
      return '#B9D9FF' 
    case 'Alloy': 
      return '#64C800' 
    case 'Alpine Abuild': 
      return '#ddd' 
    case 'AMPL': 
      return '#E6EFBB' 
    case 'ANTLR': 
      return '#9DC3FF' 
    case 'Apex': 
      return '#ddd' 
    case 'API Blueprint': 
      return '#2ACCA8' 
    case 'APL': 
      return '#5A8164' 
    case 'Apollo Guidance Computer': 
      return '#ddd' 
    case 'AppleScript': 
      return '#101F1F' 
    case 'Arc': 
      return '#aa2afe' 
    case 'Arduino': 
      return '#bd79d1' 
    case 'ASP': 
      return '#6a40fd' 
    case 'AspectJ': 
      return '#a957b0' 
    case 'Assembly': 
      return '#6E4C13' 
    case 'ATS': 
      return '#1ac620' 
    case 'Augeas': 
      return '#ddd' 
    case 'AutoHotkey': 
      return '#6594b9' 
    case 'AutoIt': 
      return '#1C3552' 
    case 'Awk': 
      return '#ddd' 
    case 'Ballerina': 
      return '#FF5000' 
    case 'Batchfile': 
      return '#C1F12E' 
    case 'Befunge': 
      return '#ddd' 
    case 'Bison': 
      return '#ddd' 
    case 'BitBake': 
      return '#ddd' 
    case 'BlitzBasic': 
      return '#ddd' 
    case 'BlitzMax': 
      return '#cd6400' 
    case 'Bluespec': 
      return '#ddd' 
    case 'Boo': 
      return '#d4bec1' 
    case 'Brainfuck': 
      return '#2F2530' 
    case 'Brightscript': 
      return '#ddd' 
    case 'Bro': 
      return '#ddd' 
    case 'C': 
      return '#555555' 
    case 'C#': 
      return '#178600' 
    case 'C++': 
      return '#f34b7d' 
    case 'C2hs Haskell': 
      return '#ddd' 
    case 'CartoCSS': 
      return '#ddd' 
    case 'Ceylon': 
      return '#dfa535' 
    case 'Chapel': 
      return '#8dc63f' 
    case 'Charity': 
      return '#ddd' 
    case 'ChucK': 
      return '#ddd' 
    case 'Cirru': 
      return '#ccccff' 
    case 'Clarion': 
      return '#db901e' 
    case 'Clean': 
      return '#3F85AF' 
    case 'Click': 
      return '#E4E6F3' 
    case 'CLIPS': 
      return '#ddd' 
    case 'Clojure': 
      return '#db5855' 
    case 'CMake': 
      return '#ddd' 
    case 'COBOL': 
      return '#ddd' 
    case 'CoffeeScript': 
      return '#244776' 
    case 'ColdFusion': 
      return '#ed2cd6' 
    case 'ColdFusion CFC': 
      return '#ddd' 
    case 'Common Lisp': 
      return '#3fb68b' 
    case 'Component Pascal': 
      return '#B0CE4E' 
    case 'Cool': 
      return '#ddd' 
    case 'Coq': 
      return '#ddd' 
    case 'Crystal': 
      return '#776791' 
    case 'Csound': 
      return '#ddd' 
    case 'Csound Document': 
      return '#ddd' 
    case 'Csound Score': 
      return '#ddd' 
    case 'CSS': 
      return '#563d7c' 
    case 'Cuda': 
      return '#3A4E3A' 
    case 'CWeb': 
      return '#ddd' 
    case 'Cycript': 
      return '#ddd' 
    case 'Cython': 
      return '#ddd' 
    case 'D': 
      return '#ba595e' 
    case 'Dart': 
      return '#00B4AB' 
    case 'DataWeave': 
      return '#003a52' 
    case 'DIGITAL Command Language': 
      return '#ddd' 
    case 'DM': 
      return '#447265' 
    case 'Dogescript': 
      return '#cca760' 
    case 'DTrace': 
      return '#ddd' 
    case 'Dylan': 
      return '#6c616e' 
    case 'E': 
      return '#ccce35' 
    case 'eC': 
      return '#913960' 
    case 'ECL': 
      return '#8a1267' 
    case 'ECLiPSe': 
      return '#ddd' 
    case 'Eiffel': 
      return '#946d57' 
    case 'Elixir': 
      return '#6e4a7e' 
    case 'Elm': 
      return '#60B5CC' 
    case 'Emacs Lisp': 
      return '#c065db' 
    case 'EmberScript': 
      return '#FFF4F3' 
    case 'EQ': 
      return '#a78649' 
    case 'Erlang': 
      return '#B83998' 
    case 'F#': 
      return '#b845fc' 
    case 'Factor': 
      return '#636746' 
    case 'Fancy': 
      return '#7b9db4' 
    case 'Fantom': 
      return '#14253c' 
    case 'Filebench WML': 
      return '#ddd' 
    case 'Filterscript': 
      return '#ddd' 
    case 'fish': 
      return '#ddd' 
    case 'FLUX': 
      return '#88ccff' 
    case 'Forth': 
      return '#341708' 
    case 'Fortran': 
      return '#4d41b1' 
    case 'FreeMarker': 
      return '#0050b2' 
    case 'Frege': 
      return '#00cafe' 
    case 'Game Maker Language': 
      return '#8fb200' 
    case 'GAMS': 
      return '#ddd' 
    case 'GAP': 
      return '#ddd' 
    case 'GCC Machine Description': 
      return '#ddd' 
    case 'GDB': 
      return '#ddd' 
    case 'GDScript': 
      return '#ddd' 
    case 'Genie': 
      return '#fb855d' 
    case 'Genshi': 
      return '#ddd' 
    case 'Gentoo Ebuild': 
      return '#ddd' 
    case 'Gentoo Eclass': 
      return '#ddd' 
    case 'Gherkin': 
      return '#5B2063' 
    case 'GLSL': 
      return '#ddd' 
    case 'Glyph': 
      return '#e4cc98' 
    case 'Gnuplot': 
      return '#f0a9f0' 
    case 'Go': 
      return '#375eab' 
    case 'Golo': 
      return '#88562A' 
    case 'Gosu': 
      return '#82937f' 
    case 'Grace': 
      return '#ddd' 
    case 'Grammatical Framework': 
      return '#79aa7a' 
    case 'Groovy': 
      return '#e69f56' 
    case 'Groovy Server Pages': 
      return '#ddd' 
    case 'Hack': 
      return '#878787' 
    case 'Harbour': 
      return '#0e60e3' 
    case 'Haskell': 
      return '#5e5086' 
    case 'Haxe': 
      return '#df7900' 
    case 'HCL': 
      return '#ddd' 
    case 'HLSL': 
      return '#ddd' 
    case 'HTML': 
      return '#e34c26' 
    case 'Hy': 
      return '#7790B2' 
    case 'HyPhy': 
      return '#ddd' 
    case 'IDL': 
      return '#a3522f' 
    case 'Idris': 
      return '#ddd' 
    case 'IGOR Pro': 
      return '#ddd' 
    case 'Inform 7': 
      return '#ddd' 
    case 'Inno Setup': 
      return '#ddd' 
    case 'Io': 
      return '#a9188d' 
    case 'Ioke': 
      return '#078193' 
    case 'Isabelle': 
      return '#FEFE00' 
    case 'Isabelle ROOT': 
      return '#ddd' 
    case 'J': 
      return '#9EEDFF' 
    case 'Jasmin': 
      return '#ddd' 
    case 'Java': 
      return '#b07219' 
    case 'Java Server Pages': 
      return '#ddd' 
    case 'JavaScript': 
      return '#f1e05a' 
    case 'JFlex': 
      return '#ddd' 
    case 'Jison': 
      return '#ddd' 
    case 'Jison Lex': 
      return '#ddd' 
    case 'Jolie': 
      return '#843179' 
    case 'JSONiq': 
      return '#40d47e' 
    case 'JSX': 
      return '#ddd' 
    case 'Julia': 
      return '#a270ba' 
    case 'Jupyter Notebook': 
      return '#DA5B0B' 
    case 'Kotlin': 
      return '#F18E33' 
    case 'KRL': 
      return '#28431f' 
    case 'LabVIEW': 
      return '#ddd' 
    case 'Lasso': 
      return '#999999' 
    case 'Lean': 
      return '#ddd' 
    case 'Lex': 
      return '#DBCA00' 
    case 'LFE': 
      return '#ddd' 
    case 'LilyPond': 
      return '#ddd' 
    case 'Limbo': 
      return '#ddd' 
    case 'Literate Agda': 
      return '#ddd' 
    case 'Literate CoffeeScript': 
      return '#ddd' 
    case 'Literate Haskell': 
      return '#ddd' 
    case 'LiveScript': 
      return '#499886' 
    case 'LLVM': 
      return '#185619' 
    case 'Logos': 
      return '#ddd' 
    case 'Logtalk': 
      return '#ddd' 
    case 'LOLCODE': 
      return '#cc9900' 
    case 'LookML': 
      return '#652B81' 
    case 'LoomScript': 
      return '#ddd' 
    case 'LSL': 
      return '#3d9970' 
    case 'Lua': 
      return '#000080' 
    case 'M': 
      return '#ddd' 
    case 'M4': 
      return '#ddd' 
    case 'M4Sugar': 
      return '#ddd' 
    case 'Makefile': 
      return '#427819' 
    case 'Mako': 
      return '#ddd' 
    case 'Mask': 
      return '#f97732' 
    case 'Mathematica': 
      return '#ddd' 
    case 'Matlab': 
      return '#e16737' 
    case 'Max': 
      return '#c4a79c' 
    case 'MAXScript': 
      return '#00a6a6' 
    case 'Mercury': 
      return '#ff2b2b' 
    case 'Meson': 
      return '#007800' 
    case 'Metal': 
      return '#8f14e9' 
    case 'MiniD': 
      return '#ddd' 
    case 'Mirah': 
      return '#c7a938' 
    case 'Modelica': 
      return '#ddd' 
    case 'Modula-2': 
      return '#ddd' 
    case 'Module Management System': 
      return '#ddd' 
    case 'Monkey': 
      return '#ddd' 
    case 'Moocode': 
      return '#ddd' 
    case 'MoonScript': 
      return '#ddd' 
    case 'MQL4': 
      return '#62A8D6' 
    case 'MQL5': 
      return '#4A76B8' 
    case 'MTML': 
      return '#b7e1f4' 
    case 'MUF': 
      return '#ddd' 
    case 'mupad': 
      return '#ddd' 
    case 'Myghty': 
      return '#ddd' 
    case 'NCL': 
      return '#28431f' 
    case 'Nearley': 
      return '#990000' 
    case 'Nemerle': 
      return '#3d3c6e' 
    case 'nesC': 
      return '#94B0C7' 
    case 'NetLinx': 
      return '#0aa0ff' 
    case 'NetLinx+ERB': 
      return '#747faa' 
    case 'NetLogo': 
      return '#ff6375' 
    case 'NewLisp': 
      return '#87AED7' 
    case 'Nim': 
      return '#37775b' 
    case 'Nit': 
      return '#009917' 
    case 'Nix': 
      return '#7e7eff' 
    case 'NSIS': 
      return '#ddd' 
    case 'Nu': 
      return '#c9df40' 
    case 'NumPy': 
      return '#ddd' 
    case 'Objective-C': 
      return '#438eff' 
    case 'Objective-C++': 
      return '#6866fb' 
    case 'Objective-J': 
      return '#ff0c5a' 
    case 'OCaml': 
      return '#3be133' 
    case 'Omgrofl': 
      return '#cabbff' 
    case 'ooc': 
      return '#b0b77e' 
    case 'Opa': 
      return '#ddd' 
    case 'Opal': 
      return '#f7ede0' 
    case 'OpenCL': 
      return '#ddd' 
    case 'OpenEdge ABL': 
      return '#ddd' 
    case 'OpenRC runscript': 
      return '#ddd' 
    case 'OpenSCAD': 
      return '#ddd' 
    case 'Ox': 
      return '#ddd' 
    case 'Oxygene': 
      return '#cdd0e3' 
    case 'Oz': 
      return '#fab738' 
    case 'P4': 
      return '#7055b5' 
    case 'Pan': 
      return '#cc0000' 
    case 'Papyrus': 
      return '#6600cc' 
    case 'Parrot': 
      return '#f3ca0a' 
    case 'Parrot Assembly': 
      return '#ddd' 
    case 'Parrot Internal Representation': 
      return '#ddd' 
    case 'Pascal': 
      return '#E3F171' 
    case 'PAWN': 
      return '#dbb284' 
    case 'Pep8': 
      return '#C76F5B' 
    case 'Perl': 
      return '#0298c3' 
    case 'Perl 6': 
      return '#0000fb' 
    case 'PHP': 
      return '#4F5D95' 
    case 'PicoLisp': 
      return '#ddd' 
    case 'PigLatin': 
      return '#fcd7de' 
    case 'Pike': 
      return '#005390' 
    case 'PLpgSQL': 
      return '#ddd' 
    case 'PLSQL': 
      return '#dad8d8' 
    case 'PogoScript': 
      return '#d80074' 
    case 'Pony': 
      return '#ddd' 
    case 'PostScript': 
      return '#da291c' 
    case 'POV-Ray SDL': 
      return '#ddd' 
    case 'PowerBuilder': 
      return '#8f0f8d' 
    case 'PowerShell': 
      return '#012456' 
    case 'Processing': 
      return '#0096D8' 
    case 'Prolog': 
      return '#74283c' 
    case 'Propeller Spin': 
      return '#7fa2a7' 
    case 'Puppet': 
      return '#302B6D' 
    case 'PureBasic': 
      return '#5a6986' 
    case 'PureScript': 
      return '#1D222D' 
    case 'Python': 
      return '#3572A5' 
    case 'Python console': 
      return '#ddd' 
    case 'QMake': 
      return '#ddd' 
    case 'QML': 
      return '#44a51c' 
    case 'R': 
      return '#198CE7' 
    case 'Racket': 
      return '#22228f' 
    case 'Ragel': 
      return '#9d5200' 
    case 'RAML': 
      return '#77d9fb' 
    case 'Rascal': 
      return '#fffaa0' 
    case 'REALbasic': 
      return '#ddd' 
    case 'Reason': 
      return '#ddd' 
    case 'Rebol': 
      return '#358a5b' 
    case 'Red': 
      return '#f50000' 
    case 'Redcode': 
      return '#ddd' 
    case 'RenderScript': 
      return '#ddd' 
    case 'REXX': 
      return '#ddd' 
    case 'Ring': 
      return '#0e60e3' 
    case 'RobotFramework': 
      return '#ddd' 
    case 'Roff': 
      return '#ecdebe' 
    case 'Rouge': 
      return '#cc0088' 
    case 'Ruby': 
      return '#701516' 
    case 'RUNOFF': 
      return '#665a4e' 
    case 'Rust': 
      return '#dea584' 
    case 'Sage': 
      return '#ddd' 
    case 'SaltStack': 
      return '#646464' 
    case 'SAS': 
      return '#B34936' 
    case 'Scala': 
      return '#c22d40' 
    case 'Scheme': 
      return '#1e4aec' 
    case 'Scilab': 
      return '#ddd' 
    case 'Self': 
      return '#0579aa' 
    case 'ShaderLab': 
      return '#ddd' 
    case 'Shell': 
      return '#89e051' 
    case 'ShellSession': 
      return '#ddd' 
    case 'Shen': 
      return '#120F14' 
    case 'Slash': 
      return '#007eff' 
    case 'Smali': 
      return '#ddd' 
    case 'Smalltalk': 
      return '#596706' 
    case 'Smarty': 
      return '#ddd' 
    case 'SMT': 
      return '#ddd' 
    case 'SourcePawn': 
      return '#5c7611' 
    case 'SQF': 
      return '#3F3F3F' 
    case 'SQLPL': 
      return '#ddd' 
    case 'Squirrel': 
      return '#800000' 
    case 'SRecode Template': 
      return '#348a34' 
    case 'Stan': 
      return '#b2011d' 
    case 'Standard ML': 
      return '#dc566d' 
    case 'Stata': 
      return '#ddd' 
    case 'SuperCollider': 
      return '#46390b' 
    case 'Swift': 
      return '#ffac45' 
    case 'SystemVerilog': 
      return '#DAE1C2' 
    case 'Tcl': 
      return '#e4cc98' 
    case 'Tcsh': 
      return '#ddd' 
    case 'Terra': 
      return '#00004c' 
    case 'TeX': 
      return '#3D6117' 
    case 'Thrift': 
      return '#ddd' 
    case 'TI Program': 
      return '#A0AA87' 
    case 'TLA': 
      return '#ddd' 
    case 'Turing': 
      return '#cf142b' 
    case 'TXL': 
      return '#ddd' 
    case 'TypeScript': 
      return '#2b7489' 
    case 'Unified Parallel C': 
      return '#ddd' 
    case 'Unix Assembly': 
      return '#ddd' 
    case 'Uno': 
      return '#ddd' 
    case 'UnrealScript': 
      return '#a54c4d' 
    case 'UrWeb': 
      return '#ddd' 
    case 'Vala': 
      return '#fbe5cd' 
    case 'VCL': 
      return '#ddd' 
    case 'Verilog': 
      return '#b2b7f8' 
    case 'VHDL': 
      return '#adb2cb' 
    case 'Vim script': 
      return '#199f4b' 
    case 'Visual Basic': 
      return '#945db7' 
    case 'Volt': 
      return '#1F1F1F' 
    case 'Vue': 
      return '#2c3e50' 
    case 'WebAssembly': 
      return '#04133b' 
    case 'WebIDL': 
      return '#ddd' 
    case 'wisp': 
      return '#7582D1' 
    case 'X10': 
      return '#4B6BEF' 
    case 'xBase': 
      return '#403a40' 
    case 'XC': 
      return '#99DA07' 
    case 'Xojo': 
      return '#ddd' 
    case 'XProc': 
      return '#ddd' 
    case 'XQuery': 
      return '#5232e7' 
    case 'XS': 
      return '#ddd' 
    case 'XSLT': 
      return '#EB8CEB' 
    case 'Xtend': 
      return '#ddd' 
    case 'Yacc': 
      return '#4B6C4B' 
    case 'Zephir': 
      return '#118f9e' 
    case 'Zimpl': 
      return '#ddd'
    default:
      return '#ddd'
  }
}

const Circle = ({ color }) => (
  <span style={{
    position: 'absolute',
    display: 'inline-block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    marginTop: '9px',
    marginLeft: '-20px',
    backgroundColor: color
  }} />
)

const LanguageCircle = ({ language }) => 
  <Circle color={colorFromLanguage(language)} />

const WorkPage = () => (
  <div style={{textAlign: 'center' }}>
  <TopProfile />

  <ContentItem icon="cap">
    <h1>Open Source Projects</h1>
    <p style={{ marginBottom: 0 }}>In my spare time, I love working on open source and getting involved in the different communities. Here's a list of projects that I'm either <a href="https://github.com/nickzuber">actively working on</a>, <a href="https://github.com/nickzuber?tab=repositories">have worked on</a>, <a href="https://github.com/nickzuber?utf8=%E2%9C%93&tab=repositories&q=&type=fork&language=">helping out with</a>, or <a href="https://github.com/nickzuber?utf8=%E2%9C%93&tab=repositories&q=&type=fork&language=">interested in</a>.</p>

    {repositories.sort(byStars).map(repo => 
      <p key={repo.name} style={{
        margin: '25px 0'
      }}>
      <LanguageCircle language={repo.language}/><a href={repo.url}>{repo.name}
      </a><br />
      <span style={{
        margin: 0,
        fontSize: '90%',
        opacity: .5,
      }}>
        {repo.stars.toLocaleString()} star{repo.stars > 1 ? 's' : ''}, {repo.forks.toLocaleString()} fork{repo.forks > 1 ? 's' : ''}
      </span><br />
      {repo.description + endSentence(repo.description)}</p>
    )}
  </ContentItem>
  </div>
)

export default WorkPage
