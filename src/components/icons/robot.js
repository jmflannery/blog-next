import * as React from 'react';

function RobotIcon(props) {
  return (
    <svg
      height={100}
      width={100}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      {...props}
    >
      <path d="M549.432 419.301H448.775c-72.159 0-130.865 58.706-130.865 130.865 0 52.711 31.372 100.04 79.923 120.575 16.142 6.827 33.281 10.288 50.942 10.288h100.657c72.159 0 130.865-58.705 130.865-130.863 0-72.159-58.706-130.865-130.865-130.865zm-83.808 236.728h-16.849c-14.297 0-28.16-2.797-41.203-8.313-39.28-16.614-64.662-54.904-64.662-97.55 0-58.374 47.491-105.865 105.865-105.865h16.849v30.73c-25.042 12.8-41.338 38.898-41.338 67.469s16.295 54.669 41.338 67.469v46.06zm40-52.966v52.966h-15v-54.207a12.5 12.5 0 00-8.174-11.728c-19.836-7.317-33.164-26.444-33.164-47.595s13.328-40.277 33.164-47.595a12.5 12.5 0 008.174-11.728v-38.877h15v37.636a12.5 12.5 0 008.921 11.977c21.296 6.364 36.17 26.344 36.17 48.587s-14.874 42.223-36.17 48.587a12.501 12.501 0 00-8.921 11.977zm43.808 52.966h-18.808v-44.294c11.68-5.194 22.044-13.364 29.792-23.604 10.009-13.228 15.299-29.006 15.299-45.631s-5.29-32.403-15.299-45.631c-7.748-10.241-18.112-18.411-29.792-23.605v-28.963h18.808c58.374 0 105.865 47.491 105.865 105.865 0 58.373-47.491 105.863-105.865 105.863z" />
      <path d="M922.771 613.156c-.548-34.141-8.244-60.836-19.177-81.636a12.462 12.462 0 00-.878-1.801c-.123-.204-.262-.393-.395-.587-12.097-22.022-27.809-37.2-42.2-47.443-23.215-16.523-46.496-23.013-57.612-25.343-15.452-26.963-44.521-45.169-77.763-45.169h-6.375c-17.444-17.633-38.173-32.004-61.182-42.121V308.78H555.285v-26.53H657.19V181.625h38.081v24.25c0 6.903 5.597 12.5 12.5 12.5s12.5-5.597 12.5-12.5v-73.5c0-6.903-5.597-12.5-12.5-12.5s-12.5 5.597-12.5 12.5v24.25H657.19V56h-50.558l-32.689-38H435.315l-41.104 38h-53.13v100.625H303v-24.25c0-6.903-5.597-12.5-12.5-12.5s-12.5 5.597-12.5 12.5v73.5c0 6.903 5.597 12.5 12.5 12.5s12.5-5.597 12.5-12.5v-24.25h38.081V282.25h103.633v26.53h-102.11v59.582c-23.644 10.148-44.923 24.778-62.769 42.816h-7.143c-33.242 0-62.31 18.206-77.762 45.169-11.116 2.33-34.398 8.82-57.613 25.343-13.84 9.851-28.9 24.271-40.793 44.948-.12.168-.248.328-.36.504a12.6 12.6 0 00-.956 1.828c-11.655 21.152-19.97 48.638-20.541 84.187H40.146v63.496h25v-38.496h117.987v38.496h25v-63.496h-44.372c-1.193-36.796 21.142-55.325 34.279-63.004a90.285 90.285 0 0026.246 25.883c9.028 68.979 53.767 128.697 119.083 156.323A195.962 195.962 0 00364 739.744V834h-42.497c-32.809 0-59.5 26.691-59.5 59.5s26.691 59.5 59.5 59.5H675.25c32.809 0 59.5-26.691 59.5-59.5s-26.691-59.5-59.5-59.5H633v-93.902c38.805-11.278 73.747-34.57 99.21-66.323 22.674-28.274 37.091-62.461 41.746-98.258a90.273 90.273 0 0025.443-25.364c13.138 7.678 35.474 26.208 34.28 63.004h-44.373v63.496h25v-38.496h117.986v38.496h25v-63.496h-34.521zm-784.022 0H99.674c.4-23.11 4.405-43.554 11.973-61.23l33.953 21.781c-4.441 10.871-7.26 23.938-6.851 39.449zm27.681-70.11a93.015 93.015 0 00-8.201 9.06l-34.412-22.076c7.381-10.466 16.437-19.603 27.162-27.372 11.842-8.579 23.849-14.015 33.499-17.409a89.775 89.775 0 00-1.344 15.49 89.2 89.2 0 004.123 26.86c-5.99 3.353-13.524 8.373-20.827 15.447zM445.101 43h117.372l11.183 13H431.039l14.062-13zm-79.02 214.25V81H632.19v176.25H366.081zm164.204 25v26.53h-60.571v-26.53h60.571zm-162.681 51.53H632.19v26.238c-17.268-4.94-35.492-7.589-54.324-7.589H420.341c-18.258 0-35.94 2.499-52.737 7.152V333.78zM222.8 541.612c-9.148-11.14-14.667-25.367-14.667-40.874 0-30.397 21.128-55.928 49.463-62.747-20.534 29.698-33.155 65.26-34.796 103.621zM675.25 859c19.023 0 34.5 15.477 34.5 34.5s-15.477 34.5-34.5 34.5H321.503c-19.023 0-34.5-15.477-34.5-34.5s15.477-34.5 34.5-34.5H675.25zM389 834v-91.331h96.876V834H389zm121.877 0v-91.331H608V834h-97.123zm109.301-116.331H378.057a171.777 171.777 0 01-24.949-8.336c-64.091-27.107-105.504-89.585-105.504-159.167 0-95.248 77.49-172.738 172.737-172.738h157.525c95.248 0 172.737 77.49 172.737 172.738.001 79.673-53.499 148.175-130.425 167.503zm155.195-176.945c-1.792-37.929-14.323-73.087-34.609-102.512 27.872 7.145 48.543 32.459 48.543 62.527 0 15.093-5.22 28.982-13.934 39.985zm55.637 2.322c-7.303-7.074-14.838-12.094-20.826-15.446a89.21 89.21 0 004.123-26.861c0-5.299-.466-10.492-1.353-15.541 9.377 3.3 21.018 8.565 32.671 16.859 11.716 8.339 21.465 18.291 29.253 29.797L839.824 552.9a92.644 92.644 0 00-8.814-9.854zm27.681 70.11c.396-15.077-2.251-27.848-6.479-38.535l34.44-20.677c7.018 17.205 10.728 36.976 11.112 59.212h-39.073z" />
      <path d="M555.668 109.585h-24.82c-11.662 0-22.878 3.368-32.472 9.633-9.594-6.265-20.809-9.633-32.471-9.633h-24.82c-32.831 0-59.54 26.709-59.54 59.54s26.709 59.54 59.54 59.54h24.82c11.662 0 22.877-3.368 32.471-9.633 9.594 6.265 20.81 9.633 32.472 9.633h24.82c32.83 0 59.54-26.709 59.54-59.54s-26.71-59.54-59.54-59.54zm0 94.08h-24.82c-8.915 0-17.381-3.396-23.839-9.563a12.463 12.463 0 00-8.633-3.46 12.464 12.464 0 00-8.633 3.46c-6.458 6.167-14.924 9.563-23.838 9.563h-24.82c-19.045 0-34.54-15.495-34.54-34.54s15.495-34.54 34.54-34.54h24.82c8.914 0 17.38 3.396 23.838 9.563 4.831 4.613 12.435 4.613 17.266 0 6.458-6.167 14.924-9.563 23.839-9.563h24.82c19.046 0 34.54 15.495 34.54 34.54s-15.494 34.54-34.54 34.54z" />
      <path d="M460.512 156.625h-32.005c-6.903 0-12.5 5.596-12.5 12.5s5.597 12.5 12.5 12.5h32.005c6.903 0 12.5-5.596 12.5-12.5s-5.597-12.5-12.5-12.5zM566.923 156.625h-32.005c-6.903 0-12.5 5.596-12.5 12.5s5.597 12.5 12.5 12.5h32.005c6.903 0 12.5-5.596 12.5-12.5s-5.597-12.5-12.5-12.5zM317.91 893.5c0 6.903 5.596 12.5 12.5 12.5h337.387c6.903 0 12.5-5.597 12.5-12.5s-5.597-12.5-12.5-12.5H330.41c-6.904 0-12.5 5.597-12.5 12.5z" />
    </svg>
  );
}

export default RobotIcon;