window.onload=function(){
  const toggle = document.getElementById('switch');
  const body = document.body;

  toggle.addEventListener('input', e => {
    console.log("here")
      const isChecked = e.target.checked;

      if (isChecked) { // light mode
          body.classList.remove('dark-mode-body');
          body.classList.add('light-mode-body');
          [ ...document.getElementsByClassName("dark-mode-a") ].forEach( x => x.className = 'light-mode-a')
          document.getElementById("divider-pic").src="divider_light.svg";
          document.getElementById("slider-circle").className="slider round slider-mode-dark";
      } else { // dark mode
          body.classList.remove('light-mode-body');
          body.classList.add('dark-mode-body');
          [ ...document.getElementsByClassName("light-mode-a") ].forEach( x => x.className = 'dark-mode-a');
          document.getElementById("divider-pic").src="divider_dark.svg";
          document.getElementById("slider-circle").className="slider round slider-mode-light";
      }
  });
}
