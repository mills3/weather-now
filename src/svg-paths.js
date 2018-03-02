import React from 'react';

const paths = {
  rain: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <g fill="#fff" fillRule="evenodd">
      <g transform="matrix(1.28244 0 0 1.28846 -3.857 -10.962)">
        <ellipse ry="9" rx="9.273" cy="29" cx="13.273"/>
        <circle r="14.182" cy="23.818" cx="26.727"/>
        <circle r="11" cy="27" cx="40.636"/>
      </g>
        <ellipse className="raindrop" cx="29.883" cy="39.043" rx="1.091" ry="2.545" transform="rotate(20)"/>
        <ellipse className="raindrop" transform="rotate(20)" ry="2.545" rx="1.091" cy="31.864" cx="37.912"/>
        <ellipse className="raindrop" cx="58.585" cy="24.34" rx="1.091" ry="2.545" transform="rotate(20)"/>
        <ellipse className="raindrop" transform="rotate(20)" ry="2.545" rx="1.091" cy="32.203" cx="48.677"/>
    </g>
  </svg>,

  snow: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="svg-icon">
    <g fillRule="evenodd" transform="matrix(1.2824 0 0 1.2885 -3.857 -10.962)" fill="#fff">
      <ellipse rx="9.273" ry="9" cy="29" cx="13.273"/>
      <circle cy="23.818" cx="26.727" r="14.182"/>
      <circle cy="27" cx="40.636" r="11"/>
    </g>
    <g stroke="#fff" fill="none">
      <g className="flake1 flake" strokeWidth=".25">
        <path d="M13.426 51.735l6.79-3.184M14.935 50.988l-1.764-.637M14.323 52.806l.637-1.763M18.703 49.22l.638-1.763M20.493 49.913l-1.764-.638M13.426 51.735l6.79-3.184M14.935 50.988l-1.764-.637M14.323 52.806l.637-1.763M18.703 49.22l.638-1.763M20.493 49.913l-1.764-.638" />
        <g>
          <path d="M15.221 46.745l3.185 6.79M15.968 48.254l.638-1.764M14.15 47.642l1.764.637M17.736 52.023l1.763.637M17.044 53.812l.637-1.764" />
        </g>
        <g>
          <path d="M17.731 47.601l-1.836 5.078M17.344 48.75l1.222-.574M16.73 47.512l.573 1.223M16.325 51.568l.573 1.223M15.062 52.127l1.222-.574" />
        </g>
        <g>
          <path d="M19.364 51.069l-5.078-1.836M18.216 50.681l.573 1.223M19.453 50.067l-1.223.574M15.397 49.662l-1.222.574M14.838 48.4l.574 1.222" />
        </g>
      </g>

      <g className="flake2 flake">
        <path d="M27.068 44.143h7.5M28.751 44.107l-1.326-1.326M27.425 45.493l1.326-1.326M32.914 44.107l1.326-1.326M34.24 45.493l-1.326-1.326M27.068 44.143h7.5M28.751 44.107l-1.326-1.326M27.425 45.493l1.326-1.326M32.914 44.107l1.326-1.326M34.24 45.493l-1.326-1.326" strokeWidth=".25"/>
        <g>
          <path d="M30.812 40.387v7.5M30.848 42.07l1.326-1.325M29.462 40.745l1.326 1.326M30.848 46.233l1.326 1.326M29.462 47.56l1.326-1.327" strokeWidth=".25"/>
        </g>
        <g>
          <path d="M32.721 42.228l-3.818 3.818M31.883 43.103h1.35M31.852 41.722v1.35M29.764 45.222v1.35M28.383 45.192h1.35" strokeWidth=".18"/>
        </g>
        <g>
          <path d="M32.727 46.061l-3.818-3.818M31.852 45.222v1.35M33.233 45.192h-1.35M29.733 43.103h-1.35M29.763 41.722v1.35" strokeWidth=".18"/>
        </g>
      </g>

      <g className="flake3 flake">
        <path d="M40.04 52.592l-2.455 7.086M39.524 54.194l1.687-.819M38.648 52.487l.819 1.687M38.16 58.127l.82 1.687M36.417 58.926l1.687-.819M40.04 52.592l-2.455 7.086M39.524 54.194l1.687-.819M38.648 52.487l.819 1.687M38.16 58.127l.82 1.687M36.417 58.926l1.687-.819" strokeWidth=".25"/>
        <g>
          <path d="M42.364 57.36l-7.087-2.456M40.761 56.842l.82 1.687M42.468 55.966l-1.687.82M36.828 55.48l-1.687.818M36.03 53.735l.818 1.687" strokeWidth=".25"/>
        </g>
        <g>
          <path d="M40 58.56l-2.359-4.857M39.447 57.482l-.442 1.275M40.762 57.905l-1.276-.442M38.138 54.785l-1.276-.442M38.62 53.49l-.443 1.276" strokeWidth=".18"/>
        </g>
        <g>
          <path d="M36.376 57.311l4.858-2.357M37.455 56.759l-1.276-.442M37.031 58.074l.442-1.276M40.15 55.45l.443-1.276M41.446 55.931l-1.276-.442" strokeWidth=".18"/>
        </g>
      </g>

      <g className="flake4 flake">
        <path d="M48.2 48.822l5.244-5.362M49.352 47.594l-1.876.02M49.416 49.511l-.021-1.875M52.262 44.618l-.021-1.875M54.18 44.639l-1.875.02M48.2 48.822l5.244-5.362M49.352 47.594l-1.876.02M49.416 49.511l-.021-1.875M52.262 44.618l-.021-1.875M54.18 44.639l-1.875.02" strokeWidth=".25"/>
        <g>
          <path d="M48.133 43.52l5.362 5.243M49.362 44.67l-.021-1.874M47.444 44.735l1.875-.021M52.338 47.581l1.875-.02M52.316 49.5l-.02-1.876" strokeWidth=".25"/>
        </g>
        <g>
          <path d="M50.784 43.442l.06 5.4M50.823 44.653l.944-.965M49.815 43.71l.965.944M50.857 47.65l.965.944M49.87 48.616l.943-.966" strokeWidth=".18"/>
        </g>
        <g>
          <path d="M53.528 46.117l-5.4.06M52.317 46.157l.965.944M53.26 45.148l-.944.965M49.32 46.19l-.944.966M48.354 45.203l.966.944" strokeWidth=".18"/>
        </g>
      </g>
    </g>
  </svg>,

  fog: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="svg-icon">
    <g transform="matrix(1.2824 0 0 1.2885 -3.541 -11.752)" fill="#fff" fillRule="evenodd">
      <ellipse rx="9.273" ry="9" cy="29" cx="13.273"/>
      <circle cy="23.818" cx="26.727" r="14.182"/>
      <circle cy="27" cx="40.636" r="11"/>
    </g>

    <path className="fogline fog5" d="M-21.352 60.935s14.15-4.969 21.814-4.969c7.665 0 14.15 4.97 21.815 4.97 7.665 0 14.15-4.97 21.815-4.97 7.665 0 14.15 4.97 21.814 4.97 7.665 0 21.815-4.97 21.815-4.97" fill="none" stroke="#fff" strokeWidth="1.202"/>
    <path className="fogline fog4" d="M-21.352 56.96s14.15-4.97 21.814-4.97c7.665 0 14.15 4.97 21.815 4.97 7.665 0 14.15-4.97 21.815-4.97 7.665 0 14.15 4.97 21.814 4.97 7.665 0 21.815-4.97 21.815-4.97" fill="none" stroke="#fff" strokeWidth="1.202"/>
    <path className="fogline fog3" d="M-21.352 52.985s14.15-4.97 21.814-4.97c7.665 0 14.15 4.97 21.815 4.97 7.665 0 14.15-4.97 21.815-4.97 7.665 0 14.15 4.97 21.814 4.97 7.665 0 21.815-4.97 21.815-4.97" fill="none" stroke="#fff" strokeWidth="1.202"/>
    <path className="fogline fog2" d="M-21.352 49.01s14.15-4.97 21.814-4.97c7.665 0 14.15 4.97 21.815 4.97 7.665 0 14.15-4.97 21.815-4.97 7.665 0 14.15 4.97 21.814 4.97 7.665 0 21.815-4.97 21.815-4.97" fill="none" stroke="#fff" strokeWidth="1.202"/>
    <path className="fogline fog1" d="M-21.352 45.034s14.15-4.97 21.814-4.97c7.665 0 14.15 4.97 21.815 4.97 7.665 0 14.15-4.97 21.815-4.97 7.665 0 14.15 4.97 21.814 4.97 7.665 0 21.815-4.97 21.815-4.97" fill="none" stroke="#fff" strokeWidth="1.202"/>
  </svg>,

  sun: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="svg-icon">
    <g className="sun" fill="none" stroke="#fff" stroke-width="1.03">
      <circle cx="32" cy="31.999" r="14.045"/>
      <path className="sunline" d="M32 15.07V3.117M32 48.975v11.951M48.968 32h11.951M15 32H3.05M43.998 20.04l8.45-8.451M20.005 20.078l-8.45-8.45M43.997 43.967l8.45 8.45M20.037 43.966l-8.45 8.45" stroke-linecap="round"/>
    </g>
  </svg>,

  clouds: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="svg-icon">
    <g fillRule="evenodd">
      <g transform="matrix(.56441 0 0 .5671 25.208 .646)" fill="#8d8787" className="cloud4 cloud">
        <ellipse rx="9.273" ry="9" cy="29" cx="13.273"/>
        <circle cy="23.818" cx="26.727" r="14.182"/>
        <circle cy="27" cx="40.636" r="11"/>
      </g>
      <g transform="matrix(.76781 0 0 .77147 22.64 6.87)" fill="#a39b9b" className="cloud3 cloud">
        <ellipse rx="9.273" ry="9" cy="29" cx="13.273"/>
        <circle cy="23.818" cx="26.727" r="14.182"/>
        <circle cy="27" cx="40.636" r="11"/>
      </g>
      <g transform="matrix(.94267 0 0 .94716 -2.587 4.14)" fill="#bfb7b7" className="cloud2 cloud">
        <ellipse cx="13.273" cy="29" ry="9" rx="9.273"/>
        <circle r="14.182" cx="26.727" cy="23.818"/>
        <circle r="11" cx="40.636" cy="27"/>
      </g>
      <g transform="matrix(1.28239 0 0 1.28849 -2.946 10.737)" fill="#d5d0d0" className="cloud1 cloud">
        <ellipse cx="13.273" cy="29" ry="9" rx="9.273"/>
        <circle r="14.182" cx="26.727" cy="23.818"/>
        <circle r="11" cx="40.636" cy="27"/>
      </g>
    </g>
  </svg>,

  wind1: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <g fill="none" stroke="#fff" strokeWidth="1.138">
      <path className="line line1" d="M3.35 6.184h45.938"/>
      <path className="line line2" d="M7.49 11.565h39.832"/>
      <path className="line line3" d="M13.18 17.255h34.142"/>
      <path className="line line4" d="M24.56 22.945h28.453"/>
      <path className="line line5" d="M53.013 28.636H30.25"/>
      <path className="line line6" d="M47.322 34.326H24.561"/>
      <path className="line line7" d="M41.632 40.017H24.561"/>
      <path className="line line8" d="M35.942 45.707H24.56"/>
      <path className="line line9" d="M30.251 51.398h-11.38"/>
      <path className="line line10" d="M24.56 57.088h-5.69"/>
    </g>
  </svg>,

  wind2: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <g className="windmill" transform="matrix(1.15762 0 0 1.15762 -5.079 -4.036)" stroke="#fff" fill="none">
      <g strokeLinecap="round">
        <path d="M31.847 26.113s-2.625-3.465-2.924-5.528c-.71-4.89 2.924-14.528 2.924-14.528"/>
        <path d="M32.153 26.113s2.625-3.465 2.924-5.528c.71-4.89-2.924-14.528-2.924-14.528"/>
      </g>
      <circle cx="32" cy="32" r="4.455"/>
      <g strokeLinecap="round">
        <path d="M37.26 34.867s4.314-.541 6.25.231c4.588 1.83 11.12 9.797 11.12 9.797"/>
        <path d="M37.108 35.132s1.688 4.006 3.325 5.296c3.88 3.058 14.044 4.732 14.044 4.732"/>
      </g>
      <g strokeLinecap="round">
        <path d="M26.8 34.867s-4.314-.541-6.25.231c-4.588 1.83-11.12 9.797-11.12 9.797"/>
        <path d="M26.953 35.132s-1.689 4.006-3.326 5.296c-3.88 3.058-14.043 4.732-14.043 4.732"/>
      </g>
    </g>
  </svg>
};

export default paths;
