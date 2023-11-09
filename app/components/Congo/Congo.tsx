"use client";
import { useState } from "react";
import Image from "next/image";
import "./Congo.scss";
import Link from "next/link";


export default function Congo() {

  const [showTooltip, setShowTooltip] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="congo">
        <svg
          className="congo__svg"
          width="299"
          height="296"
          viewBox="0 0 299 296"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M272.165 99.6979C272.77 98.3147 272.856 98.6317 272.712 97.0756C272.539 95.5483 272.626 96.384 272.712 93.8481C272.77 91.3122 276.569 78.5462 276.885 76.3849C277.202 74.2236 277.288 72.6675 277.403 71.7742C277.518 70.852 278.727 70.8521 280.886 70.6504C283.044 70.4486 282.325 68.489 282.325 67.3652C282.325 66.2413 286.642 64.5987 286.642 64.5987L297.952 54.3686C297.952 54.3686 299.017 52.9854 297.952 52.1209C296.858 51.2852 297.722 49.3544 296.714 48.951C295.707 48.5764 295.103 47.4238 293.779 48.1154C292.484 48.807 292.858 48.1153 291.361 47.1932C289.836 46.2711 290.325 46.4152 290.872 43.9657C291.39 41.5162 291.937 39.9025 291.707 38.721C291.477 37.5683 290.095 38.404 289.778 37.1072C289.462 35.7816 291.246 36.8767 291.39 34.629C291.534 32.3813 292.916 32.6118 292.916 31.632C292.916 30.6522 292.11 28.3756 292.11 28.3756C291.937 28.3756 291.764 28.2892 291.592 28.0875C290.297 26.7042 292.282 27.3094 288.685 28.4909C285.087 29.6436 287.16 27.8858 286.901 25.8686C286.67 23.8802 286.123 23.6496 283.217 23.0156C280.31 22.4105 278.439 19.3847 277.749 17.3099C277.058 15.2351 275.59 16.2437 275.36 14.6299C275.13 13.0162 274.295 13.7942 271.676 12.5551C269.057 11.316 270.352 12.9296 268.136 15.6385C265.92 18.3473 267.215 17.1658 265.431 15.6385C263.675 14.1111 265.287 14.3993 261.747 15.0333C258.207 15.6385 261.92 13.0449 258.351 13.6501C254.811 14.2552 260.049 14.8028 256.193 16.8777C252.365 18.9525 253.977 18.4914 252.653 17.5692C251.358 16.6471 252.797 16.7335 251.271 16.5606C249.746 16.4165 251.271 16.5607 249.343 16.3301C247.415 16.0996 248.278 15.6385 247.501 14.3417C246.724 13.0162 245.803 13.9383 243.817 12.3245C241.832 10.7107 243.904 10.3938 242.58 8.63592C241.285 6.87808 239.501 6.79165 238.033 5.63896C237.831 5.46606 237.63 5.32198 237.457 5.14908C237.227 5.09144 231.385 3.85229 230.665 5.26433C229.946 6.70518 229.744 7.02219 228.622 5.46607C227.499 3.93876 226.463 5.86951 224.017 5.78306C221.571 5.66779 223.413 4.86091 221.254 3.93877C219.096 3.01662 218.606 2.90135 216.534 3.62178C214.491 4.3422 211.498 3.42003 209.973 1.66219C208.447 -0.0668337 206.577 1.34522 205.886 3.30479C205.166 5.26435 205.771 5.46606 204.245 6.27294C202.72 7.10864 202.49 7.7138 201.886 6.99337C201.281 6.27294 198.518 7.51205 197.166 7.59851C195.842 7.71377 194 6.56111 192.561 5.63896C191.122 4.71682 191.841 4.80325 189.884 6.47464C187.927 8.11721 185.798 8.72235 178.085 11.4023C175.955 12.1516 174.804 12.6415 174.2 12.9296C172.991 13.5348 174.056 13.3907 174.2 12.9296C174.228 12.7856 174.199 12.6127 173.969 12.411C172.645 11.2871 173.566 10.9701 172.53 10.7684C171.494 10.5666 171.005 10.5667 169.249 9.4428C167.523 8.31893 169.451 11.0854 166.487 11.6905C163.522 12.2957 164.846 13.8518 162.4 17.6557C159.925 21.4595 161.076 19.9034 158.802 19.9034C156.529 19.9034 156.126 18.9812 153.967 18.9812C151.809 18.9812 150.888 18.9812 149.449 18.1744C148.01 17.3387 148.528 18.3761 146.254 18.2608C144.01 18.1744 145.017 18.3761 141.448 17.4539C137.851 16.5318 136.844 15.408 132.411 14.9757C128.008 14.5723 130.052 15.1774 129.649 13.1314C129.246 11.0854 124.209 7.48326 122.454 7.48326C120.698 7.48326 120.497 7.07982 119.288 5.95595C118.05 4.83209 117.532 5.03381 114.251 4.91854C110.971 4.80327 110.453 7.68493 107.978 9.24106C105.531 10.7684 105.762 13.7654 102.279 15.4368C98.7969 17.137 100.38 17.598 101.761 19.4423C103.143 21.2866 101.301 25.8974 100.696 27.9146C100.092 29.9318 97.0125 28.3757 95.3145 29.2978C93.6165 30.22 91.458 29.7589 89.9327 27.7705C88.4074 25.8109 87.3138 29.1248 83.63 28.0586C79.9462 26.9924 81.7881 29.2978 76.0897 30.0758C70.3913 30.8539 71.485 28.9808 70.2474 30.0758C69.0099 31.1421 70.3913 32.2371 68.7221 35.3206C67.0241 38.404 67.3407 41.4874 66.4197 43.7928C65.4988 46.0982 62.8511 49.0663 62.8511 49.0663C63.0525 49.2968 63.2252 49.4986 63.3403 49.758C63.8008 50.8242 63.5418 50.3919 63.0238 51.17C62.3043 52.2362 62.074 51.4293 62.1028 52.8702C62.1028 53.5042 62.3906 54.1958 62.4481 54.8586C62.5633 56.0977 62.4769 57.4521 62.4481 58.6912C62.074 58.6047 61.6999 58.4607 61.3833 58.2878C61.3833 58.2878 62.6208 62.1781 63.5994 62.7257C64.5779 63.2732 65.5276 62.1204 66.0744 63.6477C66.6212 65.2039 68.7797 65.5785 69.2401 66.1837C69.7006 66.7888 70.8518 75.6645 71.5425 76.9036C72.2332 78.1427 73.8449 76.9036 74.6795 77.9122C75.5141 78.9208 76.7516 78.3733 76.838 79.4395C76.9243 80.5346 77.6726 81.8313 79.1116 81.9178C80.5218 82.0042 78.2194 85.6928 78.8526 89.2373C79.4569 92.7818 78.9964 94.7702 77.7014 98.8622C76.4063 102.954 71.5425 108.026 70.564 110.879C69.5567 113.732 64.1174 116.037 63.3403 119.668C62.592 123.27 63.513 132.463 63.9447 134.077C64.3476 135.662 63.8584 135.46 63.6857 137.16C63.5418 138.86 60.3473 143.154 59.7717 144.854C59.2248 146.555 56.8074 146.555 55.1094 146.958C53.4114 147.361 48.2023 153.182 46.6482 154.133C45.1228 155.113 43.3097 158.398 41.7268 160.041C40.1439 161.684 40.2015 161.885 39.1654 160.819C38.1581 159.753 36.2299 161.799 35.7695 161.021C35.309 160.243 36.8055 159.119 35.9133 157.822C35.0499 156.554 35.7119 155.661 36.7479 154.594C37.784 153.528 36.1724 153.615 35.6255 152.174C35.0787 150.733 35.309 152.289 32.3447 152.894C29.3804 153.499 29.7257 154.537 28.0277 154.537C26.3297 154.537 25.0634 155.805 25.2073 156.727C25.3512 157.649 25.0634 157.764 24.0849 158.542C23.1064 159.292 22.0415 159.782 20.804 160.502C19.5665 161.222 17.2066 158.024 16.3432 157.015C16.113 156.756 15.7964 156.698 15.4222 156.756C14.271 156.957 12.4867 158.341 10.9614 159.003C8.91802 159.868 11.4219 159.724 10.4434 160.444C9.46485 161.165 9.86776 160.56 8.94681 161.972C8.02586 163.412 7.10491 163.038 5.75227 164.162C4.4284 165.257 6.52933 165.113 6.52933 165.113V174.565H1.20508C2.64406 176.755 5.55083 179.665 5.55083 179.665C5.55083 179.665 4.94642 179.637 4.25571 179.665C5.29178 179.809 6.29909 179.781 6.93224 179.377C8.77414 178.224 11.3931 176.15 15.3935 176.38C19.3938 176.611 62.3043 177.504 65.0671 176.38C68.2904 175.919 67.3695 177.014 67.9163 177.014C68.4631 177.014 70.1611 178.369 70.4489 179.752C70.7655 181.135 71.3698 179.838 71.4562 181.538C71.5425 183.239 71.226 187.705 73.2117 190.558C75.1975 193.411 75.9458 196.725 75.1975 198.022C74.4493 199.319 80.0613 202.171 81.3564 204.506C82.6515 206.811 82.2773 209.895 85.0402 210.673C87.803 211.451 90.5083 210.442 92.0336 211.047C93.5589 211.652 92.8107 211.652 94.2496 210.356C95.7174 209.059 99.171 210.269 99.4012 210.269C99.6315 210.269 100.552 208.742 101.387 208.944C102.222 209.174 104.15 210.183 105.301 210.269C106.452 210.356 113.072 209.722 113.072 209.722C113.072 209.722 111.978 205.111 113.503 204.189C115.029 203.267 114.626 204.794 115.144 201.509C115.662 198.224 114.223 196.898 115.144 195.861C116.065 194.823 115.345 194.621 116.266 194.42C117.187 194.218 127.231 193.843 127.231 193.843C127.231 193.843 127.548 193.296 128.555 193.094C129.591 192.892 132.67 193.296 132.67 193.296C132.67 193.296 130.109 198.022 130.829 198.627C131.548 199.232 150.83 198.829 150.83 198.829C150.83 198.829 152.787 202.2 151.435 203.872C150.111 205.514 149.593 210.442 151.118 211.969C152.644 213.525 152.356 221.825 151.32 224.188C150.312 226.551 150.715 229 150.715 230.556C150.715 232.112 149.996 233.035 151.32 234.562C152.644 236.089 155.234 238.769 156.155 240.095C157.076 241.42 155.637 241.853 157.277 243.697C158.918 245.541 159.436 247.184 158.802 248.509C158.198 249.835 157.881 248.394 158.486 250.872C159.09 253.322 160.213 253.639 158.083 254.273C155.924 254.878 156.961 255.8 157.277 257.644C157.594 259.489 157.479 260.641 157.479 261.247C157.479 261.852 158.399 260.324 160.673 259.402C162.918 258.48 161.393 256.953 162.515 257.76C163.637 258.567 165.594 258.048 167.235 258.567C168.875 259.085 168.242 259.489 170.314 258.884C172.358 258.278 174.401 256.117 176.157 256.434C177.883 256.751 180.243 257.961 181.596 257.471C182.92 256.953 184.675 255.224 185.28 255.31C185.884 255.425 187.035 256.434 188.1 257.788C189.165 259.114 190.748 256.924 190.978 258.855C191.208 260.785 190.431 264.705 193.05 264.503C195.669 264.272 195.353 262.399 197.367 262.399C199.382 262.399 201.137 262.399 203.526 261.333C205.915 260.267 206.145 259.863 205.828 261.247C205.512 262.63 204.994 263.552 205.598 265.166C206.202 266.779 208.908 268.48 208.908 269.171C208.908 269.863 209.138 268.019 210.519 268.249C211.901 268.48 215.21 269.546 215.815 270.554C216.448 271.563 216.131 271.246 218.808 271.333C221.513 271.419 222.261 271.707 224.42 272.255C226.578 272.802 227.643 272.485 229.284 271.794C230.895 271.102 231.212 271.419 231.816 268.854C232.421 266.318 233.601 264.474 234.752 266.462C235.903 268.48 234.896 269.776 236.306 270.554C237.687 271.333 239.385 273.494 239.702 274.935C240.018 276.404 241.86 277.24 243.242 277.471C244.623 277.701 244.105 276.001 245.544 276.923C247.012 277.845 247.472 279.315 250.005 279.459C252.538 279.603 252.941 277.932 254.092 280.612C255.243 283.32 253.775 282.312 255.243 284.387C256.711 286.461 257.488 284.761 259.099 287.009C260.711 289.228 261.574 292.254 262.639 293.781C263.733 295.308 263.474 295.251 267.187 294.473C270.87 293.695 269.345 292.023 270.957 292.484C272.568 292.945 273.719 291.706 273.201 293.089C272.655 294.473 271.388 295.308 273.345 295.481C275.302 295.625 275.533 295.107 275.533 295.107V275.165C275.533 275.165 273.921 276.231 273.144 276.087C272.396 275.943 269.604 275.713 270.064 277.009C270.525 278.335 270.755 279.257 270.755 279.632C270.755 280.006 267.82 279.718 267.446 279.027C267.071 278.335 264.452 280.179 263.071 278.335C261.69 276.491 258.754 272.716 256.452 271.333C254.149 269.949 253.142 266.779 252.825 264.56C252.509 262.342 252.365 264.647 253.977 260.785C255.588 256.924 256.193 256.002 256.135 254.158C256.049 252.313 257.517 254.33 257.603 251.247C257.66 248.164 256.682 244.389 256.999 243.092C257.315 241.795 256.998 240.7 257.229 239.864C257.459 239.029 254.293 230.297 253.89 229.26C253.487 228.222 253.372 226.695 255.013 225.369C256.653 224.044 261.488 217.675 261.488 217.675C261.488 217.675 271.216 215.744 273.892 215.312C276.079 214.966 283.274 214.361 286.44 214.159C286.958 213.698 287.476 213.208 287.534 212.69C287.678 211.278 285.605 209.088 283.677 207.359C281.749 205.687 281.749 203.814 281.979 202.287C282.209 200.759 279.13 197.59 278.065 196.35C277 195.111 274.669 194.132 272.223 191.97C269.777 189.809 268.539 183.498 267.848 181.884C267.158 180.27 266.007 179.262 266.208 177.648C266.409 176.034 268.223 175.717 268.539 174.795C268.856 173.873 268.625 171.798 267.474 170.876C266.323 169.954 265.316 164.709 264.251 161.338C263.186 157.937 264.798 156.006 266.15 153.874C267.532 151.713 267.474 149.263 266.928 148.255C266.381 147.246 266.093 150.647 264.452 151.799C262.812 152.952 264.539 150.272 264.798 147.189C265.028 144.105 264.942 144.019 264.568 142.635C264.193 141.252 265.028 138.399 265.028 137.621C265.028 137.275 265.719 137.131 266.496 137.074C266.525 136.469 266.64 134.077 266.64 132.694C266.64 131.08 264.107 131.541 263.013 129.005C261.949 126.469 265.086 125.633 266.467 125.547C267.848 125.46 268.769 128.4 269.69 128.63C270.611 128.861 275.216 128.4 276.396 128.025C277.547 127.65 277.864 126.642 277.634 125.259C277.403 123.875 277.317 123.04 277.634 121.887C277.95 120.734 278.785 121.801 279.936 122.608C281.087 123.414 282.728 122.002 284.109 121.282C285.346 120.648 286.296 122.78 286.555 122.608C286.584 122.521 286.613 122.463 286.613 122.463C286.728 121.628 290.613 121.628 291.851 121.628C293.088 121.628 291.448 116.902 292.167 116.181C292.887 115.461 290.527 109.208 290.009 108.487C289.52 107.767 289.001 106.326 287.649 105.404C286.325 104.482 285.087 101.946 285.087 101.946C283.706 102.407 281.864 105.49 280.396 106.095C278.929 106.7 277.087 107.306 276.626 106.729C276.281 106.297 274.065 105.951 272.137 106.585C272.05 105.692 271.59 101.11 272.137 99.842L272.165 99.6979Z"
            fill="#857867"
          />
          <path
            d="M174.2 12.9296C174.804 12.6415 175.955 12.1516 178.085 11.4023C185.798 8.72235 187.927 8.11721 189.884 6.47464C191.841 4.80325 191.122 4.71682 192.561 5.63896C194 6.56111 195.842 7.71377 197.166 7.59851C198.518 7.51205 201.281 6.27294 201.886 6.99337C202.49 7.7138 202.72 7.10864 204.245 6.27294C205.771 5.46606 205.166 5.26435 205.886 3.30479C206.577 1.34522 208.447 -0.0668337 209.973 1.66219C211.498 3.42003 214.491 4.3422 216.534 3.62178C218.606 2.90135 219.096 3.01662 221.254 3.93877C223.413 4.86091 221.571 5.66779 224.017 5.78306C226.463 5.86951 227.499 3.93876 228.622 5.46607C229.744 7.02219 229.946 6.70518 230.665 5.26433C231.385 3.85229 237.227 5.09144 237.457 5.14908C237.63 5.32198 237.831 5.46606 238.033 5.63896C239.501 6.79165 241.285 6.87808 242.58 8.63592C243.904 10.3938 241.832 10.7107 243.817 12.3245C245.803 13.9383 246.724 13.0162 247.501 14.3417C248.278 15.6385 247.415 16.0996 249.343 16.3301C251.271 16.5607 249.746 16.4165 251.271 16.5606C252.797 16.7335 251.358 16.6471 252.653 17.5692C253.977 18.4914 252.365 18.9525 256.193 16.8777C260.049 14.8028 254.811 14.2552 258.351 13.6501C261.92 13.0449 258.207 15.6385 261.747 15.0333C265.287 14.3993 263.675 14.1111 265.431 15.6385C267.215 17.1658 265.92 18.3473 268.136 15.6385C270.352 12.9296 269.057 11.316 271.676 12.5551C274.295 13.7942 275.13 13.0162 275.36 14.6299C275.59 16.2437 277.058 15.2351 277.749 17.3099C278.439 19.3847 280.31 22.4105 283.217 23.0156C286.123 23.6496 286.67 23.8802 286.901 25.8686C287.16 27.8858 285.087 29.6436 288.685 28.4909C292.282 27.3094 290.297 26.7042 291.592 28.0875C291.764 28.2892 291.937 28.3756 292.11 28.3756C292.11 28.3756 292.916 30.6522 292.916 31.632C292.916 32.6118 291.534 32.3813 291.39 34.629C291.246 36.8767 289.462 35.7816 289.778 37.1072C290.095 38.404 291.477 37.5683 291.707 38.721C291.937 39.9025 291.39 41.5162 290.872 43.9657C290.325 46.4152 289.836 46.2711 291.361 47.1932C292.858 48.1153 292.484 48.807 293.779 48.1154C295.103 47.4238 295.707 48.5764 296.714 48.951C297.722 49.3544 296.858 51.2852 297.952 52.1209C299.017 52.9854 297.952 54.3686 297.952 54.3686L286.642 64.5987C286.642 64.5987 282.325 66.2413 282.325 67.3652C282.325 68.489 283.044 70.4486 280.886 70.6504C278.727 70.8521 277.518 70.852 277.403 71.7742C277.288 72.6675 277.202 74.2236 276.885 76.3849C276.569 78.5462 272.77 91.3122 272.712 93.8481C272.626 96.384 272.539 95.5483 272.712 97.0756C272.856 98.6317 272.77 98.3147 272.165 99.6979L272.137 99.842C271.59 101.11 272.05 105.692 272.137 106.585C274.065 105.951 276.281 106.297 276.626 106.729C277.087 107.306 278.929 106.7 280.396 106.095C281.864 105.49 283.706 102.407 285.087 101.946C285.087 101.946 286.325 104.482 287.649 105.404C289.001 106.326 289.52 107.767 290.009 108.487C290.527 109.208 292.887 115.461 292.167 116.181C291.448 116.902 293.088 121.628 291.851 121.628C290.613 121.628 286.728 121.628 286.613 122.463C286.613 122.463 286.584 122.521 286.555 122.608C286.296 122.78 285.346 120.648 284.109 121.282C282.728 122.002 281.087 123.414 279.936 122.608C278.785 121.801 277.95 120.734 277.634 121.887C277.317 123.04 277.403 123.875 277.634 125.259C277.864 126.642 277.547 127.65 276.396 128.025C275.216 128.4 270.611 128.861 269.69 128.63C268.769 128.4 267.848 125.46 266.467 125.547C265.086 125.633 261.949 126.469 263.013 129.005C264.107 131.541 266.64 131.08 266.64 132.694C266.64 134.077 266.525 136.469 266.496 137.074C265.719 137.131 265.028 137.275 265.028 137.621C265.028 138.399 264.193 141.252 264.568 142.635C264.942 144.019 265.028 144.105 264.798 147.189C264.539 150.272 262.812 152.952 264.452 151.799C266.093 150.647 266.381 147.246 266.928 148.255C267.474 149.263 267.532 151.713 266.15 153.874C264.798 156.006 263.186 157.937 264.251 161.338C265.316 164.709 266.323 169.954 267.474 170.876C268.625 171.798 268.856 173.873 268.539 174.795C268.223 175.717 266.409 176.034 266.208 177.648C266.007 179.262 267.158 180.27 267.848 181.884C268.539 183.498 269.777 189.809 272.223 191.97C274.669 194.132 277 195.111 278.065 196.35C279.13 197.59 282.209 200.759 281.979 202.287C281.749 203.814 281.749 205.687 283.677 207.359C285.605 209.088 287.678 211.278 287.534 212.69C287.476 213.208 286.958 213.698 286.44 214.159C283.274 214.361 276.079 214.966 273.892 215.312C271.216 215.744 261.488 217.675 261.488 217.675C261.488 217.675 256.653 224.044 255.013 225.369C253.372 226.695 253.487 228.222 253.89 229.26C254.293 230.297 257.459 239.029 257.229 239.864C256.998 240.7 257.315 241.795 256.999 243.092C256.682 244.389 257.66 248.164 257.603 251.247C257.517 254.33 256.049 252.313 256.135 254.158C256.193 256.002 255.588 256.924 253.977 260.785C252.365 264.647 252.509 262.342 252.825 264.56C253.142 266.779 254.149 269.949 256.452 271.333C258.754 272.716 261.69 276.491 263.071 278.335C264.452 280.179 267.071 278.335 267.446 279.027C267.82 279.718 270.755 280.006 270.755 279.632C270.755 279.257 270.525 278.335 270.064 277.009C269.604 275.713 272.396 275.943 273.144 276.087C273.921 276.231 275.533 275.165 275.533 275.165V295.107C275.533 295.107 275.302 295.625 273.345 295.481C271.388 295.308 272.655 294.473 273.201 293.089C273.719 291.706 272.568 292.945 270.957 292.484C269.345 292.023 270.87 293.695 267.187 294.473C263.474 295.251 263.733 295.308 262.639 293.781C261.574 292.254 260.711 289.228 259.099 287.009C257.488 284.761 256.711 286.461 255.243 284.387C253.775 282.312 255.243 283.32 254.092 280.612C252.941 277.932 252.538 279.603 250.005 279.459C247.472 279.315 247.012 277.845 245.544 276.923C244.105 276.001 244.623 277.701 243.242 277.471C241.86 277.24 240.018 276.404 239.702 274.935C239.385 273.494 237.687 271.333 236.306 270.554C234.896 269.776 235.903 268.48 234.752 266.462C233.601 264.474 232.421 266.318 231.816 268.854C231.212 271.419 230.895 271.102 229.284 271.794C227.643 272.485 226.578 272.802 224.42 272.255C222.261 271.707 221.513 271.419 218.808 271.333C216.131 271.246 216.448 271.563 215.815 270.554C215.21 269.546 211.901 268.48 210.519 268.249C209.138 268.019 208.908 269.863 208.908 269.171C208.908 268.48 206.202 266.779 205.598 265.166C204.994 263.552 205.512 262.63 205.828 261.247C206.145 259.863 205.915 260.267 203.526 261.333C201.137 262.399 199.382 262.399 197.367 262.399C195.353 262.399 195.669 264.272 193.05 264.503C190.431 264.705 191.208 260.785 190.978 258.855C190.748 256.924 189.165 259.114 188.1 257.788C187.035 256.434 185.884 255.425 185.28 255.31C184.675 255.224 182.92 256.953 181.596 257.471C180.243 257.961 177.883 256.751 176.157 256.434C174.401 256.117 172.358 258.278 170.314 258.884C168.242 259.489 168.875 259.085 167.235 258.567C165.594 258.048 163.637 258.567 162.515 257.76C161.393 256.953 162.918 258.48 160.673 259.402C158.399 260.324 157.479 261.852 157.479 261.247C157.479 260.641 157.594 259.489 157.277 257.644C156.961 255.8 155.924 254.878 158.083 254.273C160.213 253.639 159.09 253.322 158.486 250.872C157.881 248.394 158.198 249.835 158.802 248.509C159.436 247.184 158.918 245.541 157.277 243.697C155.637 241.853 157.076 241.42 156.155 240.095C155.234 238.769 152.644 236.089 151.32 234.562C149.996 233.035 150.715 232.112 150.715 230.556C150.715 229 150.312 226.551 151.32 224.188C152.356 221.825 152.644 213.525 151.118 211.969C149.593 210.442 150.111 205.514 151.435 203.872C152.787 202.2 150.83 198.829 150.83 198.829C150.83 198.829 131.548 199.232 130.829 198.627C130.109 198.022 132.67 193.296 132.67 193.296C132.67 193.296 129.591 192.892 128.555 193.094C127.548 193.296 127.231 193.843 127.231 193.843C127.231 193.843 117.187 194.218 116.266 194.42C115.345 194.621 116.065 194.823 115.144 195.861C114.223 196.898 115.662 198.224 115.144 201.509C114.626 204.794 115.029 203.267 113.503 204.189C111.978 205.111 113.072 209.722 113.072 209.722C113.072 209.722 106.452 210.356 105.301 210.269C104.15 210.183 102.222 209.174 101.387 208.944C100.552 208.742 99.6315 210.269 99.4012 210.269C99.171 210.269 95.7174 209.059 94.2497 210.356C92.8107 211.652 93.5589 211.652 92.0336 211.047C90.5083 210.442 87.803 211.451 85.0402 210.673C82.2773 209.895 82.6515 206.811 81.3564 204.506C80.0613 202.171 74.4493 199.319 75.1975 198.022C75.9458 196.725 75.1975 193.411 73.2117 190.558C71.2259 187.705 71.5425 183.239 71.4562 181.538C71.3698 179.838 70.7655 181.135 70.4489 179.752C70.1611 178.369 68.4631 177.014 67.9163 177.014C67.3695 177.014 68.2904 175.919 65.0671 176.38C62.3043 177.504 19.3938 176.611 15.3935 176.38C11.3931 176.15 8.77414 178.224 6.93224 179.377C6.29909 179.781 5.29178 179.809 4.25571 179.665C4.94642 179.637 5.55083 179.665 5.55083 179.665C5.55083 179.665 2.64406 176.755 1.20508 174.565H6.52933V165.113C6.52933 165.113 4.4284 165.257 5.75227 164.162C7.10491 163.038 8.02586 163.412 8.94681 161.972C9.86776 160.56 9.46485 161.165 10.4434 160.444C11.4219 159.724 8.91802 159.868 10.9614 159.003C12.4867 158.341 14.271 156.957 15.4222 156.756C15.7964 156.698 16.113 156.756 16.3432 157.015C17.2066 158.024 19.5665 161.222 20.804 160.502C22.0415 159.782 23.1064 159.292 24.0849 158.542C25.0634 157.764 25.3512 157.649 25.2073 156.727C25.0634 155.805 26.3297 154.537 28.0277 154.537C29.7257 154.537 29.3804 153.499 32.3447 152.894C35.309 152.289 35.0787 150.733 35.6255 152.174C36.1724 153.615 37.784 153.528 36.7479 154.594C35.7119 155.661 35.0499 156.554 35.9133 157.822C36.8055 159.119 35.309 160.243 35.7695 161.021C36.2299 161.799 38.1581 159.753 39.1654 160.819C40.2015 161.885 40.1439 161.684 41.7268 160.041C43.3097 158.398 45.1228 155.113 46.6482 154.133C48.2023 153.182 53.4114 147.361 55.1094 146.958C56.8074 146.555 59.2248 146.555 59.7717 144.854C60.3473 143.154 63.5418 138.86 63.6857 137.16C63.8584 135.46 64.3476 135.662 63.9447 134.077C63.513 132.463 62.592 123.27 63.3403 119.668C64.1174 116.037 69.5567 113.732 70.564 110.879C71.5425 108.026 76.4063 102.954 77.7014 98.8622C78.9964 94.7702 79.4569 92.7818 78.8526 89.2373C78.2194 85.6928 80.5218 82.0042 79.1116 81.9178C77.6726 81.8313 76.9243 80.5346 76.838 79.4395C76.7516 78.3733 75.5141 78.9208 74.6795 77.9122C73.8449 76.9036 72.2332 78.1427 71.5425 76.9036C70.8518 75.6645 69.7006 66.7888 69.2401 66.1837C68.7797 65.5785 66.6212 65.2039 66.0744 63.6477C65.5276 62.1204 64.5779 63.2732 63.5994 62.7257C62.6208 62.1781 61.3833 58.2878 61.3833 58.2878C61.6999 58.4607 62.074 58.6047 62.4481 58.6912C62.4769 57.4521 62.5633 56.0977 62.4481 54.8586C62.3906 54.1958 62.1028 53.5041 62.1028 52.8702C62.074 51.4293 62.3043 52.2362 63.0238 51.17C63.5418 50.3919 63.8008 50.8242 63.3403 49.758C63.2252 49.4986 63.0525 49.2968 62.8511 49.0663C62.8511 49.0663 65.4988 46.0982 66.4197 43.7928C67.3407 41.4874 67.0241 38.404 68.7221 35.3206C70.3913 32.2371 69.0099 31.1421 70.2474 30.0758C71.485 28.9808 70.3913 30.8539 76.0897 30.0758C81.7881 29.2978 79.9462 26.9924 83.63 28.0586C87.3138 29.1248 88.4074 25.8109 89.9327 27.7705C91.458 29.7589 93.6165 30.22 95.3145 29.2978C97.0125 28.3757 100.092 29.9318 100.696 27.9146C101.301 25.8974 103.143 21.2866 101.761 19.4423C100.38 17.598 98.7969 17.137 102.279 15.4368C105.762 13.7654 105.531 10.7684 107.978 9.24106C110.453 7.68493 110.971 4.80327 114.251 4.91854C117.532 5.03381 118.05 4.83209 119.288 5.95595C120.497 7.07982 120.698 7.48326 122.454 7.48326C124.209 7.48326 129.246 11.0854 129.649 13.1314C130.052 15.1774 128.008 14.5723 132.411 14.9757C136.844 15.408 137.851 16.5318 141.448 17.4539C145.017 18.3761 144.01 18.1744 146.254 18.2608C148.528 18.3761 148.01 17.3387 149.449 18.1744C150.888 18.9812 151.809 18.9812 153.967 18.9812C156.126 18.9812 156.529 19.9034 158.802 19.9034C161.076 19.9034 159.925 21.4595 162.4 17.6557C164.846 13.8518 163.522 12.2957 166.487 11.6905C169.451 11.0854 167.523 8.31893 169.249 9.4428C171.005 10.5667 171.494 10.5666 172.53 10.7684C173.566 10.9701 172.645 11.2871 173.969 12.411C174.199 12.6127 174.228 12.7856 174.2 12.9296ZM174.2 12.9296C172.991 13.5348 174.056 13.3907 174.2 12.9296Z"
            stroke="white"
          />
        </svg>

        <h6 className="congo__title" onClick={handleButtonClick}>
          <Image src={"/congo.png"} alt="" width={41} height={22}></Image>
          DRC
        </h6>
  
        <button
          className="congo__btn"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          i
          {showTooltip && (
            <div className="congo__tooltip tooltip-2">
              <h6>Sponsored data</h6>
              <p>
                Advantages of working with us Advantages of working with
                usAdvantages of working
              </p>
            </div>
          )}
        </button>
      </div>
      {showModal && (
        <div className="modal-congo">
          <button className="modal-congo__close" onClick={handleCloseModal}>
            <svg
              className="modal__close-svg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41 1L21 21M1 41L21 21M21 21L1 1L41 41"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <Image
            className="modal-congo__image"
            src={"/congo-modal.png"}
            alt=""
            width={1008}
            height={999}
          ></Image>
          <div className="modal-congo__content">
            <h6>
              {" "}
              <Image src={"/congo.png"} alt="" width={41} height={22}></Image>
              DRC
            </h6>
            <Link href={""}>
              Reverse Billing
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 17L17 2M17 2H2M17 2V17"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
            </Link>
            <Link href={""}>
              Data & Voice Distribution
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 17L17 2M17 2H2M17 2V17"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
            </Link>
            <Link href={"/products/b2c-data-voice-sharing"}>
              Data & Voice Sharing
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 17L17 2M17 2H2M17 2V17"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
            </Link>
            <Link href={"/products/b2c-data-voice-cost-sharing"}>
              Data & Voice Cost Sharing
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 17L17 2M17 2H2M17 2V17"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
