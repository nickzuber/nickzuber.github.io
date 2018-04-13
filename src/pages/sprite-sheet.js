import React from 'react'
import domtoimage from 'dom-to-image'
import FileSaver from 'file-saver'

import TemplateSheet from '../img/sprite-sheet-template.png'

const NAME = 'school'

// this should be 128x128px
import Img from '../img/drawn/school.png'

function createAndSaveImage (name) {
  domtoimage.toBlob(document.querySelector('.sprite-sheet-wrapper'))
  .then(function (blob) {
    console.log(`saved 'sprite-sheet-${name}.png'`)
    FileSaver.saveAs(blob, `sprite-sheet-${name}.png`);
  });
}

const IconOverlay = ({ pos, zoom }) =>
  <div
    style={{
      position: 'absolute',
      height: '300px',
      width: '300px',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      left: `${pos * 300}px`,
    }}
  >
    <div
      style={{
        display: 'inline-block',
        height: '100%',
        verticalAlign: 'middle',
      }}
    />
    <img
      style={{
        verticalAlign: 'middle',
        zoom: `${zoom}`,
      }}
      src={Img}
    />
  </div>

const Test = () =>
  <div
    className="sprite-sheet-wrapper"
    style={{
      background: `url(${TemplateSheet})`,
      position: 'relative',
      height: '300px',
      width: '8700px'
    }}
  >
    <IconOverlay pos={6} zoom={0.17} />
    <IconOverlay pos={7} zoom={0.4} />
    <IconOverlay pos={8} zoom={0.53} />
    <IconOverlay pos={9} zoom={0.67} />
    <IconOverlay pos={10} zoom={0.75} />
    <IconOverlay pos={11} zoom={0.85} />
    <IconOverlay pos={12} zoom={0.9} />
    <IconOverlay pos={13} zoom={0.85} />
    <IconOverlay pos={14} zoom={0.8} />
    <IconOverlay pos={15} zoom={0.7} />
    <IconOverlay pos={16} zoom={0.7} />
    <IconOverlay pos={17} zoom={0.7} />
    <IconOverlay pos={18} zoom={0.7} />
    <IconOverlay pos={19} zoom={0.7} />
    <IconOverlay pos={20} zoom={0.7} />
    <IconOverlay pos={21} zoom={0.7} />
    <IconOverlay pos={22} zoom={0.7} />
    <IconOverlay pos={23} zoom={0.7} />
    <IconOverlay pos={24} zoom={0.7} />
    <IconOverlay pos={25} zoom={0.7} />
    <IconOverlay pos={26} zoom={0.7} />
    <IconOverlay pos={27} zoom={0.7} />
    <IconOverlay pos={28} zoom={0.7} />
  </div>

const SpiteSheetPage = () => (
  <div>
    <Test />
    <button onClick={() => createAndSaveImage(NAME)}>make and save</button>
    <div style={{
      position: 'relative',
    }} className="output-location" />
  </div>
)

export default SpiteSheetPage
