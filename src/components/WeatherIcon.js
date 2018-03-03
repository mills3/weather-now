import paths from '../svg-paths';

const TestIcon = ({ code }) => {
  if(code < 600) return paths.rain;
  if(code >= 600 && code < 623) return paths.snow;
  if(code > 700 && code < 782) return paths.fog;
  if(code === 800) return paths.sun;
  if(code > 800 && code < 805) return paths.clouds;
  if(code >= 900 && code < 907) return paths.wind1;
}

export default TestIcon;
