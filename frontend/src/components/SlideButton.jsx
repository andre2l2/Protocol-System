import styled from 'styled-components';

const SlideButton = () => {
  function addClick() {
    const $slide = document.querySelector('#s-slide');
    const $body = document.querySelector('body');

    if ($slide.value == 1) {
      $body.style.backgroundColor = '#000000'; 
    } else {
      $body.style.backgroundColor = 'var(--background-color)'; 
    }
  }

  const SlideInput = styled.span`
    #s-slide {
      width: 50px;
      background-color: var(--background-color);
      border-radius: 27px;
      padding: 5px;
      -webkit-appearance: none;
      cursor: pointer;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        cursor: pointer;
        background: var(--black-color);
        width: 15px;
        height: 15px;
        border-radius: 50%;
      } 
    }
  `

  return (
    <SlideInput>
      <input type="range" id="s-slide" max="1" onClick={ addClick }/>
    </SlideInput>
  )
}

export default SlideButton;