import React from 'react'
import { Button } from '../ui/button'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import { cn } from '@/lib/utils';

const items = [
    {
        title: "Frontend development",
        description: (
            <span className="text-sm">
                Experience the power of AI in generating unique content.
            </span>
        ),
        header: "Frontend development",
        className: "md:col-span-2",
        img: '/svg/frontend.png',
        svg: (<svg
            width="100%"
            height="100%"
            preserveAspectRatio="xMinYMin meet"
            viewBox="0 0 1042 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_894_1258)">
                <rect x="1" y="1" width="1040" height="676" rx="30" fill="none" />
                <g filter="url(#filter0_d_894_1258)">
                    <rect width="1040" height="65" transform="translate(1 1)" fill="#FFFFFF" />
                    <circle cx="34" cy="33" r="8" fill="#FF635B" />
                    <circle cx="58" cy="33" r="8" fill="#FFC33A" />
                    <circle cx="82" cy="33" r="8" fill="#82DE8E" />
                    <rect x="390" y="16" width="263" height="35" rx="8" fill="#F8F9F9" />
                    <mask id="mask0_894_1258" maskUnits="userSpaceOnUse" x="397" y="25" width="16" height="16">
                        <rect x="397" y="25" width="16" height="16" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_894_1258)">
                        <path d="M401 39.6667C400.633 39.6667 400.32 39.5362 400.058 39.2751C399.797 39.014 399.667 38.7001 399.667 38.3334V31.6667C399.667 31.3001 399.797 30.9862 400.058 30.7251C400.32 30.464 400.633 30.3334 401 30.3334H401.667V29.0001C401.667 28.0779 401.992 27.2917 402.642 26.6417C403.292 25.9917 404.078 25.6667 405 25.6667C405.922 25.6667 406.708 25.9917 407.358 26.6417C408.008 27.2917 408.333 28.0779 408.333 29.0001V30.3334H409C409.367 30.3334 409.681 30.464 409.942 30.7251C410.203 30.9862 410.333 31.3001 410.333 31.6667V38.3334C410.333 38.7001 410.203 39.014 409.942 39.2751C409.681 39.5362 409.367 39.6667 409 39.6667H401ZM401 38.3334H409V31.6667H401V38.3334ZM405 36.3334C405.367 36.3334 405.681 36.2029 405.942 35.9417C406.203 35.6806 406.333 35.3667 406.333 35.0001C406.333 34.6334 406.203 34.3195 405.942 34.0584C405.681 33.7973 405.367 33.6667 405 33.6667C404.633 33.6667 404.32 33.7973 404.058 34.0584C403.797 34.3195 403.667 34.6334 403.667 35.0001C403.667 35.3667 403.797 35.6806 404.058 35.9417C404.32 36.2029 404.633 36.3334 405 36.3334ZM403 30.3334H407V29.0001C407 28.4445 406.806 27.9723 406.417 27.5834C406.028 27.1945 405.556 27.0001 405 27.0001C404.445 27.0001 403.972 27.1945 403.583 27.5834C403.195 27.9723 403 28.4445 403 29.0001V30.3334Z" fill="#DDDDDD" />
                    </g>
                    <mask id="mask1_894_1258" maskUnits="userSpaceOnUse" x="626" y="28" width="16" height="16">
                        <rect x="626" y="28" width="16" height="16" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask1_894_1258)">
                        <path d="M634 41.3334C632.511 41.3334 631.25 40.8167 630.217 39.7834C629.183 38.7501 628.667 37.489 628.667 36.0001C628.667 34.5112 629.183 33.2501 630.217 32.2167C631.25 31.1834 632.511 30.6667 634 30.6667C634.767 30.6667 635.5 30.8251 636.2 31.1417C636.9 31.4584 637.5 31.9112 638 32.5001V30.6667H639.333V35.3334H634.667V34.0001H637.467C637.111 33.3779 636.625 32.889 636.008 32.5334C635.392 32.1779 634.722 32.0001 634 32.0001C632.889 32.0001 631.945 32.389 631.167 33.1667C630.389 33.9445 630 34.889 630 36.0001C630 37.1112 630.389 38.0556 631.167 38.8334C631.945 39.6112 632.889 40.0001 634 40.0001C634.856 40.0001 635.628 39.7556 636.317 39.2667C637.006 38.7779 637.489 38.1334 637.767 37.3334H639.167C638.856 38.5112 638.222 39.4723 637.267 40.2167C636.311 40.9612 635.222 41.3334 634 41.3334Z" fill="#DDDDDD" />
                    </g>
                    <path d="M424.13 38.1534C423.715 38.1534 423.339 38.0753 423.001 37.919C422.662 37.7599 422.394 37.5312 422.195 37.233C421.996 36.9318 421.897 36.5682 421.897 36.142C421.897 35.767 421.971 35.4631 422.118 35.2301C422.266 34.9943 422.464 34.8097 422.711 34.6761C422.958 34.5426 423.231 34.4432 423.529 34.3778C423.83 34.3097 424.133 34.2557 424.437 34.2159C424.834 34.1648 425.157 34.1264 425.404 34.1009C425.654 34.0724 425.836 34.0256 425.949 33.9602C426.066 33.8949 426.124 33.7812 426.124 33.6193V33.5852C426.124 33.1648 426.009 32.8381 425.779 32.6051C425.552 32.3722 425.206 32.2557 424.743 32.2557C424.263 32.2557 423.887 32.3608 423.614 32.571C423.341 32.7812 423.15 33.0057 423.039 33.2443L422.084 32.9034C422.255 32.5057 422.482 32.196 422.766 31.9744C423.053 31.75 423.366 31.5937 423.704 31.5057C424.045 31.4148 424.38 31.3693 424.709 31.3693C424.92 31.3693 425.161 31.3949 425.434 31.446C425.709 31.4943 425.975 31.5952 426.231 31.7486C426.489 31.902 426.704 32.1335 426.874 32.4432C427.045 32.7528 427.13 33.1676 427.13 33.6875V38H426.124V37.1136H426.073C426.005 37.2557 425.891 37.4077 425.732 37.5696C425.573 37.7315 425.361 37.8693 425.097 37.983C424.833 38.0966 424.51 38.1534 424.13 38.1534ZM424.283 37.25C424.681 37.25 425.016 37.1719 425.289 37.0156C425.564 36.8594 425.772 36.6577 425.911 36.4105C426.053 36.1634 426.124 35.9034 426.124 35.6307V34.7102C426.081 34.7614 425.988 34.8082 425.843 34.8509C425.701 34.8906 425.536 34.9261 425.349 34.9574C425.164 34.9858 424.983 35.0114 424.807 35.0341C424.634 35.054 424.493 35.071 424.385 35.0852C424.124 35.1193 423.88 35.1747 423.653 35.2514C423.428 35.3253 423.246 35.4375 423.107 35.5881C422.971 35.7358 422.903 35.9375 422.903 36.1932C422.903 36.5426 423.032 36.8068 423.29 36.9858C423.552 37.1619 423.883 37.25 424.283 37.25ZM431.437 38.1364C430.892 38.1364 430.41 37.9986 429.992 37.723C429.575 37.4446 429.248 37.0526 429.012 36.5469C428.776 36.0384 428.659 35.4375 428.659 34.7443C428.659 34.0568 428.776 33.4602 429.012 32.9545C429.248 32.4489 429.576 32.0582 429.997 31.7827C430.417 31.5071 430.903 31.3693 431.454 31.3693C431.88 31.3693 432.217 31.4403 432.464 31.5824C432.714 31.7216 432.904 31.8807 433.035 32.0597C433.169 32.2358 433.272 32.3807 433.346 32.4943H433.431V29.2727H434.437V38H433.465V36.9943H433.346C433.272 37.1136 433.167 37.2642 433.031 37.446C432.894 37.625 432.7 37.7855 432.447 37.9276C432.194 38.0668 431.857 38.1364 431.437 38.1364ZM431.573 37.233C431.977 37.233 432.318 37.1278 432.596 36.9176C432.874 36.7045 433.086 36.4105 433.231 36.0355C433.376 35.6577 433.448 35.2216 433.448 34.7273C433.448 34.2386 433.377 33.8111 433.235 33.4446C433.093 33.0753 432.883 32.7884 432.605 32.5838C432.326 32.3764 431.982 32.2727 431.573 32.2727C431.147 32.2727 430.792 32.3821 430.508 32.6009C430.227 32.8168 430.015 33.1108 429.873 33.483C429.734 33.8523 429.664 34.267 429.664 34.7273C429.664 35.1932 429.735 35.6165 429.877 35.9972C430.022 36.375 430.235 36.6761 430.517 36.9006C430.801 37.1222 431.153 37.233 431.573 37.233ZM441.771 31.4545L439.35 38H438.328L435.907 31.4545H436.998L438.805 36.6705H438.873L440.68 31.4545H441.771ZM444.825 38.1534C444.41 38.1534 444.034 38.0753 443.696 37.919C443.358 37.7599 443.089 37.5312 442.89 37.233C442.692 36.9318 442.592 36.5682 442.592 36.142C442.592 35.767 442.666 35.4631 442.814 35.2301C442.961 34.9943 443.159 34.8097 443.406 34.6761C443.653 34.5426 443.926 34.4432 444.224 34.3778C444.525 34.3097 444.828 34.2557 445.132 34.2159C445.53 34.1648 445.852 34.1264 446.099 34.1009C446.349 34.0724 446.531 34.0256 446.645 33.9602C446.761 33.8949 446.819 33.7812 446.819 33.6193V33.5852C446.819 33.1648 446.704 32.8381 446.474 32.6051C446.247 32.3722 445.902 32.2557 445.439 32.2557C444.959 32.2557 444.582 32.3608 444.309 32.571C444.037 32.7812 443.845 33.0057 443.734 33.2443L442.78 32.9034C442.95 32.5057 443.177 32.196 443.461 31.9744C443.748 31.75 444.061 31.5937 444.399 31.5057C444.74 31.4148 445.075 31.3693 445.405 31.3693C445.615 31.3693 445.856 31.3949 446.129 31.446C446.405 31.4943 446.67 31.5952 446.926 31.7486C447.184 31.902 447.399 32.1335 447.569 32.4432C447.74 32.7528 447.825 33.1676 447.825 33.6875V38H446.819V37.1136H446.768C446.7 37.2557 446.586 37.4077 446.427 37.5696C446.268 37.7315 446.057 37.8693 445.792 37.983C445.528 38.0966 445.206 38.1534 444.825 38.1534ZM444.979 37.25C445.376 37.25 445.711 37.1719 445.984 37.0156C446.26 36.8594 446.467 36.6577 446.606 36.4105C446.748 36.1634 446.819 35.9034 446.819 35.6307V34.7102C446.777 34.7614 446.683 34.8082 446.538 34.8509C446.396 34.8906 446.231 34.9261 446.044 34.9574C445.859 34.9858 445.679 35.0114 445.503 35.0341C445.329 35.054 445.189 35.071 445.081 35.0852C444.819 35.1193 444.575 35.1747 444.348 35.2514C444.123 35.3253 443.942 35.4375 443.802 35.5881C443.666 35.7358 443.598 35.9375 443.598 36.1932C443.598 36.5426 443.727 36.8068 443.986 36.9858C444.247 37.1619 444.578 37.25 444.979 37.25ZM450.666 34.0625V38H449.661V31.4545H450.632V32.4773H450.718C450.871 32.1449 451.104 31.8778 451.416 31.6761C451.729 31.4716 452.132 31.3693 452.627 31.3693C453.07 31.3693 453.458 31.4602 453.79 31.642C454.122 31.821 454.381 32.0938 454.566 32.4602C454.75 32.8239 454.843 33.2841 454.843 33.8409V38H453.837V33.9091C453.837 33.3949 453.703 32.9943 453.436 32.7074C453.169 32.4176 452.803 32.2727 452.337 32.2727C452.016 32.2727 451.729 32.3423 451.476 32.4815C451.226 32.6207 451.029 32.8239 450.884 33.0909C450.739 33.358 450.666 33.6818 450.666 34.0625ZM459.527 31.4545V32.3068H456.135V31.4545H459.527ZM457.123 29.8864H458.129V36.125C458.129 36.4091 458.17 36.6222 458.253 36.7642C458.338 36.9034 458.446 36.9972 458.577 37.0455C458.71 37.0909 458.851 37.1136 458.998 37.1136C459.109 37.1136 459.2 37.108 459.271 37.0966C459.342 37.0824 459.399 37.071 459.442 37.0625L459.646 37.9659C459.578 37.9915 459.483 38.017 459.361 38.0426C459.238 38.071 459.084 38.0852 458.896 38.0852C458.612 38.0852 458.334 38.0241 458.061 37.902C457.791 37.7798 457.567 37.5938 457.388 37.3438C457.211 37.0938 457.123 36.7784 457.123 36.3977V29.8864ZM461.773 38.0682C461.562 38.0682 461.382 37.9929 461.231 37.8423C461.081 37.6918 461.006 37.5114 461.006 37.3011C461.006 37.0909 461.081 36.9105 461.231 36.7599C461.382 36.6094 461.562 36.5341 461.773 36.5341C461.983 36.5341 462.163 36.6094 462.314 36.7599C462.464 36.9105 462.54 37.0909 462.54 37.3011C462.54 37.4403 462.504 37.5682 462.433 37.6847C462.365 37.8011 462.273 37.8949 462.156 37.9659C462.042 38.0341 461.915 38.0682 461.773 38.0682ZM467.003 38.1364C466.39 38.1364 465.861 37.9915 465.418 37.7017C464.975 37.4119 464.634 37.0128 464.395 36.5043C464.157 35.9957 464.037 35.4148 464.037 34.7614C464.037 34.0966 464.16 33.5099 464.404 33.0014C464.651 32.4901 464.995 32.0909 465.435 31.804C465.878 31.5142 466.395 31.3693 466.986 31.3693C467.447 31.3693 467.861 31.4545 468.231 31.625C468.6 31.7955 468.903 32.0341 469.138 32.3409C469.374 32.6477 469.52 33.0057 469.577 33.4148H468.572C468.495 33.1165 468.324 32.8523 468.06 32.6222C467.799 32.3892 467.447 32.2727 467.003 32.2727C466.611 32.2727 466.268 32.375 465.972 32.5795C465.68 32.7812 465.451 33.0668 465.286 33.4361C465.124 33.8026 465.043 34.233 465.043 34.7273C465.043 35.233 465.123 35.6733 465.282 36.0483C465.444 36.4233 465.671 36.7145 465.964 36.9219C466.259 37.1293 466.606 37.233 467.003 37.233C467.265 37.233 467.502 37.1875 467.715 37.0966C467.928 37.0057 468.108 36.875 468.256 36.7045C468.404 36.5341 468.509 36.3295 468.572 36.0909H469.577C469.52 36.4773 469.38 36.8253 469.155 37.1349C468.934 37.4418 468.64 37.6861 468.273 37.8679C467.91 38.0469 467.486 38.1364 467.003 38.1364ZM473.706 38.1364C473.116 38.1364 472.597 37.9957 472.151 37.7145C471.708 37.4332 471.361 37.0398 471.111 36.5341C470.864 36.0284 470.741 35.4375 470.741 34.7614C470.741 34.0795 470.864 33.4844 471.111 32.9759C471.361 32.4673 471.708 32.0724 472.151 31.7912C472.597 31.5099 473.116 31.3693 473.706 31.3693C474.297 31.3693 474.814 31.5099 475.258 31.7912C475.704 32.0724 476.05 32.4673 476.297 32.9759C476.547 33.4844 476.672 34.0795 476.672 34.7614C476.672 35.4375 476.547 36.0284 476.297 36.5341C476.05 37.0398 475.704 37.4332 475.258 37.7145C474.814 37.9957 474.297 38.1364 473.706 38.1364ZM473.706 37.233C474.155 37.233 474.525 37.1179 474.814 36.8878C475.104 36.6577 475.319 36.3551 475.458 35.9801C475.597 35.6051 475.667 35.1989 475.667 34.7614C475.667 34.3239 475.597 33.9162 475.458 33.5384C475.319 33.1605 475.104 32.8551 474.814 32.6222C474.525 32.3892 474.155 32.2727 473.706 32.2727C473.258 32.2727 472.888 32.3892 472.599 32.6222C472.309 32.8551 472.094 33.1605 471.955 33.5384C471.816 33.9162 471.746 34.3239 471.746 34.7614C471.746 35.1989 471.816 35.6051 471.955 35.9801C472.094 36.3551 472.309 36.6577 472.599 36.8878C472.888 37.1179 473.258 37.233 473.706 37.233ZM478.208 38V31.4545H479.179V32.4773H479.264C479.401 32.1278 479.621 31.8565 479.925 31.6634C480.229 31.4673 480.594 31.3693 481.02 31.3693C481.452 31.3693 481.811 31.4673 482.098 31.6634C482.388 31.8565 482.614 32.1278 482.776 32.4773H482.844C483.012 32.1392 483.263 31.8707 483.598 31.6719C483.933 31.4702 484.335 31.3693 484.804 31.3693C485.389 31.3693 485.868 31.5526 486.24 31.919C486.612 32.2827 486.798 32.8494 486.798 33.6193V38H485.793V33.6193C485.793 33.1364 485.661 32.7912 485.396 32.5838C485.132 32.3764 484.821 32.2727 484.463 32.2727C484.003 32.2727 483.646 32.4119 483.394 32.6903C483.141 32.9659 483.014 33.3153 483.014 33.7386V38H481.992V33.517C481.992 33.1449 481.871 32.8452 481.629 32.6179C481.388 32.3878 481.077 32.2727 480.696 32.2727C480.435 32.2727 480.191 32.3423 479.963 32.4815C479.739 32.6207 479.557 32.8139 479.418 33.0611C479.281 33.3054 479.213 33.5881 479.213 33.9091V38H478.208Z" fill="#AAAAAA" />
                </g>
                <rect x="58" y="108" width="177" height="6" rx="3" fill="#DEDFE3" />
                <rect x="249" y="108" width="177" height="6" rx="3" fill="#C0C2C9" />
                <rect x="440" y="108" width="177" height="6" rx="3" fill="#DEDFE3" />
                <rect x="631" y="108" width="177" height="6" rx="3" fill="#DEDFE3" />
                <rect x="822" y="108" width="177" height="6" rx="3" fill="#C0C2C9" />
                <rect width="177" height="6" rx="3" transform="matrix(-1 0 0 1 883 260)" fill="#DEDFE3" />
                <rect width="177" height="6" rx="3" transform="matrix(-1 0 0 1 692 260)" fill="#C0C2C9" />
                <rect width="177" height="6" rx="3" transform="matrix(-1 0 0 1 501 260)" fill="#DEDFE3" />
                <rect width="177" height="6" rx="3" transform="matrix(-1 0 0 1 310 260)" fill="#DEDFE3" />
                <rect width="177" height="6" rx="3" transform="matrix(-1 0 0 1 885 157)" fill="#DEDFE3" />
                <rect width="177" height="6" rx="3" transform="matrix(-1 0 0 1 694 157)" fill="#C0C2C9" />
                <rect width="177" height="6" rx="3" transform="matrix(-1 0 0 1 503 157)" fill="#DEDFE3" />
                <rect width="177" height="6" rx="3" transform="matrix(-1 0 0 1 312 157)" fill="#DEDFE3" />
                <rect width="177" height="6" rx="3" transform="matrix(-1 0 0 1 883 362)" fill="#DEDFE3" />
                <rect width="177" height="6" rx="3" transform="matrix(-1 0 0 1 692 362)" fill="#C0C2C9" />
                <rect width="177" height="6" rx="3" transform="matrix(-1 0 0 1 501 362)" fill="#DEDFE3" />
                <rect width="177" height="6" rx="3" transform="matrix(-1 0 0 1 310 362)" fill="#DEDFE3" />
                <rect width="177" height="6" rx="3" transform="matrix(-1 0 0 1 877 465)" fill="#DEDFE3" />
                <rect width="177" height="6" rx="3" transform="matrix(-1 0 0 1 686 465)" fill="#C0C2C9" />
                <rect width="177" height="6" rx="3" transform="matrix(-1 0 0 1 495 465)" fill="#DEDFE3" />
                <rect width="177" height="6" rx="3" transform="matrix(-1 0 0 1 304 465)" fill="#DEDFE3" />
                <rect width="177" height="6" rx="3" transform="matrix(-1 0 0 1 877 568)" fill="#DEDFE3" />
                <rect width="177" height="6" rx="3" transform="matrix(-1 0 0 1 686 568)" fill="#C0C2C9" />
                <rect width="177" height="6" rx="3" transform="matrix(-1 0 0 1 495 568)" fill="#DEDFE3" />
                <rect width="177" height="6" rx="3" transform="matrix(-1 0 0 1 304 568)" fill="#DEDFE3" />
                <rect x="58" y="414" width="177" height="6" rx="3" fill="#DEDFE3" />
                <rect x="249" y="414" width="177" height="6" rx="3" fill="#C0C2C9" />
                <rect x="440" y="414" width="177" height="6" rx="3" fill="#DEDFE3" />
                <rect x="631" y="414" width="177" height="6" rx="3" fill="#DEDFE3" />
                <rect x="822" y="414" width="177" height="6" rx="3" fill="#C0C2C9" />
                <rect x="50" y="311" width="177" height="6" rx="3" fill="#DEDFE3" />
                <rect x="241" y="311" width="177" height="6" rx="3" fill="#C0C2C9" />
                <rect x="432" y="311" width="177" height="6" rx="3" fill="#DEDFE3" />
                <rect x="623" y="311" width="177" height="6" rx="3" fill="#DEDFE3" />
                <rect x="814" y="311" width="177" height="6" rx="3" fill="#C0C2C9" />
                <rect x="56" y="208" width="177" height="6" rx="3" fill="#DEDFE3" />
                <rect x="247" y="208" width="177" height="6" rx="3" fill="#C0C2C9" />
                <rect x="438" y="208" width="177" height="6" rx="3" fill="#DEDFE3" />
                <rect x="629" y="208" width="177" height="6" rx="3" fill="#DEDFE3" />
                <rect x="820" y="208" width="177" height="6" rx="3" fill="#C0C2C9" />
                <rect x="66" y="517" width="177" height="6" rx="3" fill="#DEDFE3" />
                <rect x="257" y="517" width="177" height="6" rx="3" fill="#C0C2C9" />
                <rect x="448" y="517" width="177" height="6" rx="3" fill="#DEDFE3" />
                <rect x="639" y="517" width="177" height="6" rx="3" fill="#DEDFE3" />
                <rect x="830" y="517" width="177" height="6" rx="3" fill="#C0C2C9" />
                <rect x="66" y="620" width="177" height="6" rx="3" fill="#DEDFE3" />
                <rect x="257" y="620" width="177" height="6" rx="3" fill="#C0C2C9" />
                <rect x="448" y="620" width="177" height="6" rx="3" fill="#DEDFE3" />
                <rect x="639" y="620" width="177" height="6" rx="3" fill="#DEDFE3" />
                <rect x="830" y="620" width="177" height="6" rx="3" fill="#C0C2C9" />
            </g>
            <rect x="1" y="1" width="1040" height="676" rx="30" stroke="url(#paint1_linear_894_1258)" stroke-width="4" />
            <defs>
                <filter id="filter0_d_894_1258" x="-15" y="-13" width="1072" height="97" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="8" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.117647 0 0 0 0 0.176471 0 0 0 0 0.239216 0 0 0 0.5 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_894_1258" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_894_1258" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_894_1258" x1="521" y1="1" x2="521" y2="677" gradientUnits="userSpaceOnUse">
                    <stop offset="1" stop-color="#020114" />
                    <stop offset="1" stop-color="#0C067A" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_894_1258" x1="521" y1="1" x2="521" y2="677" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#9359EF" />
                    <stop offset="1" stop-color="#6C023B" stop-opacity="0" />
                </linearGradient>
                <clipPath id="clip0_894_1258">
                    <rect x="1" y="1" width="1040" height="676" rx="30" fill="white" />
                </clipPath>
            </defs>
        </svg>)
    },

    {
        title: "Databases & data science",
        description: (
            <span className="text-sm">
                Get AI-powered suggestions based on your writing context.
            </span>
        ),
        header: "Databases & data science",
        className: "md:col-span-1",
        img: '/svg/frontend.png',
        svg: (
            <svg

                width="100%"
                height="100%"
                preserveAspectRatio="xMinYMin meet"

                viewBox="0 0 1670 1263"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="1666" height="1259" rx="60" fill="none" />
                <rect x="2" y="2" width="1666" height="1259" rx="60" stroke="url(#paint0_linear_918_1186)" stroke-width="16" />
                <rect x="957" y="87" width="641" height="148" rx="16" stroke="#4CA5FF" stroke-width="4" />
                <circle cx="1020" cy="161" r="16" fill="url(#paint1_linear_918_1186)" />
                <rect x="1092" y="151" width="209" height="16" rx="4" fill="#DEDFE3" />
                <rect x="1321" y="151" width="209" height="16" rx="4" fill="#C0C2C9" />
                <rect x="957" y="285" width="641" height="148" rx="16" stroke="#C0C2C9" stroke-width="4" />
                <circle cx="1020" cy="359" r="16" fill="#C0C2C9" />
                <rect x="1092" y="349" width="209" height="16" rx="4" fill="#DEDFE3" />
                <rect x="1321" y="349" width="209" height="16" rx="4" fill="#C0C2C9" />
                <rect x="957" y="483" width="641" height="148" rx="16" stroke="#C0C2C9" stroke-width="4" />
                <circle cx="1020" cy="557" r="16" fill="#C0C2C9" />
                <rect x="1092" y="547" width="209" height="16" rx="4" fill="#DEDFE3" />
                <rect x="1321" y="547" width="209" height="16" rx="4" fill="#C0C2C9" />
                <rect x="96" y="631" width="641" height="148" rx="16" stroke="#C0C2C9" stroke-width="4" />
                <circle cx="159" cy="705" r="16" fill="#C0C2C9" />
                <rect x="231" y="695" width="209" height="16" rx="4" fill="#DEDFE3" />
                <rect x="460" y="695" width="209" height="16" rx="4" fill="#C0C2C9" />
                <rect x="96" y="829" width="641" height="148" rx="16" stroke="#C0C2C9" stroke-width="4" />
                <circle cx="159" cy="903" r="16" fill="#C0C2C9" />
                <rect x="231" y="893" width="209" height="16" rx="4" fill="#DEDFE3" />
                <rect x="460" y="893" width="209" height="16" rx="4" fill="#C0C2C9" />
                <rect x="96" y="1027" width="641" height="148" rx="16" stroke="#4CA5FF" stroke-width="4" />
                <circle cx="159" cy="1101" r="16" fill="url(#paint2_linear_918_1186)" />
                <rect x="231" y="1091" width="209" height="16" rx="4" fill="#DEDFE3" />
                <rect x="460" y="1091" width="209" height="16" rx="4" fill="#C0C2C9" />
                <path d="M381 631V219C381 185.863 407.863 159 441 159L957 159" stroke="url(#paint3_linear_918_1186)" stroke-width="6" />
                <path d="M1313 635V1047C1313 1080.14 1286.14 1107 1253 1107H737" stroke="url(#paint4_linear_918_1186)" stroke-width="6" />
                <defs>
                    {/* <linearGradient id="paint0_linear_918_1186" x1="835" y1="2" x2="835" y2="1261" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#377DFF" />
                        <stop offset="1" stop-color="#214B99" stop-opacity="0" />
                    </linearGradient> */}
                    <linearGradient id="paint1_linear_918_1186" x1="1020" y1="145" x2="1020" y2="177" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4CA5FF" />
                        <stop offset="1" stop-color="#4CA5FF" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_918_1186" x1="159" y1="1085" x2="159" y2="1117" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4CA5FF" />
                        <stop offset="1" stop-color="#4CA5FF" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_918_1186" x1="669" y1="159" x2="669" y2="631" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4CA5FF" />
                        <stop offset="1" stop-color="#ffffff" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_918_1186" x1="1025" y1="635" x2="1025" y2="1107" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#ffffff" />
                        <stop offset="1" stop-color="#4CA5FF" />
                    </linearGradient>
                </defs>
            </svg>

        )
    },
    {
        title: "Servers & Cloud Infrastructure",
        description: (
            <span className="text-sm">
                Let AI handle the proofreading of your documents.
            </span>
        ),
        header: "Servers & Cloud Infrastructure",
        className: "md:col-span-1",
        img: '/svg/frontend.png',
        svg: (
            <svg
                width="100%"
                height="100%"
                preserveAspectRatio="xMinYMin meet"

                viewBox="0 0 666 593" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M491 496.5H146.5L134.342 494.408C26.296 475.816 35.4944 317.773 144.968 311.842C154.45 311.328 162.785 305.389 166.366 296.594L185.528 249.536C234.598 129.031 401.354 118.992 464.526 232.74L467.982 238.962C474.238 250.226 485.725 257.603 498.571 258.605C620.803 268.142 645.551 436.64 531.223 480.921L491 496.5Z" stroke="url(#paint0_linear_943_1348)" stroke-width="4" />
                <path d="M361.863 500.304C362.859 499.828 363.281 498.634 362.804 497.637C362.328 496.641 361.134 496.219 360.137 496.696L361.863 500.304ZM172.332 499.781C149.084 472.283 149.092 428.949 168.855 380.547C188.577 332.245 227.788 279.454 281.879 233.725L279.297 230.67C224.815 276.73 185.164 330.023 165.152 379.035C145.181 427.946 144.584 473.155 169.277 502.364L172.332 499.781ZM281.879 233.725C335.97 187.996 394.548 158.114 445.458 146.703C496.474 135.268 539.205 142.47 562.453 169.968L565.507 167.386C540.814 138.177 496.135 131.245 444.583 142.8C392.926 154.379 333.778 184.611 279.297 230.67L281.879 233.725ZM360.137 496.696C320.974 515.417 282.198 526.009 249.084 526.965C215.944 527.922 188.779 519.235 172.332 499.781L169.277 502.364C186.815 523.108 215.408 531.94 249.2 530.964C283.018 529.987 322.348 519.194 361.863 500.304L360.137 496.696ZM562.453 169.968C584.907 196.529 585.669 237.858 567.876 284.284L571.611 285.716C589.611 238.749 589.36 195.6 565.507 167.386L562.453 169.968Z" fill="#DEDFE3" />
                <path d="M305.671 520.508C125.808 374.756 28.3513 196.934 87.9957 123.33C133.126 67.6376 255.27 87.5711 389.962 163.711" stroke="#DEDFE3" stroke-width="4" />
                <circle cx="167" cy="382" r="14" fill="#2CD2FA" />
                <circle cx="385" cy="163" r="14" fill="#2CD2FA" />
                <circle cx="567" cy="285" r="14" fill="#2CD2FA" />
                <defs>
                    <linearGradient id="paint0_linear_943_1348" x1="137" y1="300.5" x2="570.5" y2="446.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#35D4FA" />
                        <stop offset="0.81" stop-color="#43D9AD" />
                    </linearGradient>
                </defs>
            </svg>

        )
    },
    {
        title: "Mobile app development",
        description: (
            <span className="text-sm">
                Understand the sentiment of your text with AI analysis.
            </span>
        ),
        header: "Mobile app development",
        className: "md:col-span-1",
        img: '/svg/frontend.png',
        svg: (
            <svg
                width="100%"
                height="100%"
                preserveAspectRatio="xMinYMin meet"

                viewBox="0 0 617 493" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="613" height="589" rx="80" stroke="url(#paint0_linear_944_1350)" stroke-width="4" />
                <rect x="212.5" y="48" width="192" height="39" rx="19.5" stroke="url(#paint1_linear_944_1350)" stroke-width="4" />
                <rect x="204" y="119" width="209" height="16" rx="4" fill="#DEDFE3" />
                <rect x="121.5" y="155" width="374" height="16" rx="4" fill="#C0C2C9" />
                <rect x="155" y="201" width="307" height="16" rx="4" fill="#C0C2C9" />
                <rect x="226.5" y="247" width="164" height="43" rx="8" fill="#DEDFE3" />
                <mask id="mask0_944_1350" maskUnits="userSpaceOnUse" x="182" y="320" width="253" height="227">
                    <rect x="182.5" y="320" width="252" height="227" fill="#DEDFE3" />
                </mask>
                <g mask="url(#mask0_944_1350)">
                    <path d="M193 490.25L256 414.583L303.25 471.333H329.763L290.125 424.042L329.5 376.75L424 490.25H193Z" fill="#DEDFE3" />
                </g>
                <circle cx="277" cy="382" r="16" fill="#DEDFE3" />
                <defs>
                    <linearGradient id="paint0_linear_944_1350" x1="308.5" y1="2" x2="308.5" y2="591" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#D20473" />
                        <stop offset="1" stop-color="#ffffff" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_944_1350" x1="213.527" y1="48.2803" x2="404.486" y2="87.4225" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#D20473" />
                        <stop offset="1" stop-color="#FF5C00" />
                    </linearGradient>
                </defs>
            </svg>



        )
    },

    {
        title: "AI & Machine Learning",
        description: (
            <span className="text-sm">
                Summarize your lengthy documents with AI technology.
            </span>
        ),
        header: "AI & Machine Learning",
        className: "md:col-span-1",
        img: '/svg/frontend.png',
        svg: (
            <svg

                width="100%"
                height="100%"
                preserveAspectRatio="xMinYMin meet"

                viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="84" y="59" width="233" height="233" rx="20" stroke="url(#paint0_linear_944_1365)" stroke-width="2" />
                <path d="M137 91H267C275.837 91 283 98.1634 283 107V154" stroke="#AFB3BF" />
                <path d="M283 254L153 254C144.163 254 137 246.837 137 238L137 191" stroke="#AFB3BF" />
                <circle cx="137" cy="91" r="8" fill="#874EE5" />
                <circle cx="283" cy="254" r="8" fill="#874EE5" />
                <line x1="138" y1="28" x2="138" y2="59" stroke="#AFB3BF" stroke-width="2" />
                <line x1="152" y1="28" x2="152" y2="58" stroke="#AFB3BF" stroke-width="2" />
                <line x1="249" y1="28" x2="249" y2="59" stroke="#AFB3BF" stroke-width="2" />
                <line x1="263" y1="28" x2="263" y2="58" stroke="#AFB3BF" stroke-width="2" />
                <line x1="138" y1="292" x2="138" y2="323" stroke="#AFB3BF" stroke-width="2" />
                <line x1="152" y1="292" x2="152" y2="322" stroke="#AFB3BF" stroke-width="2" />
                <line x1="249" y1="292" x2="249" y2="323" stroke="#AFB3BF" stroke-width="2" />
                <line x1="263" y1="292" x2="263" y2="322" stroke="#AFB3BF" stroke-width="2" />
                <line x1="317" y1="112" x2="348" y2="112" stroke="#AFB3BF" stroke-width="2" />
                <line x1="317" y1="98" x2="347" y2="98" stroke="#AFB3BF" stroke-width="2" />
                <line x1="317" y1="253" x2="348" y2="253" stroke="#AFB3BF" stroke-width="2" />
                <line x1="317" y1="239" x2="347" y2="239" stroke="#AFB3BF" stroke-width="2" />
                <line x1="53" y1="112" x2="84" y2="112" stroke="#AFB3BF" stroke-width="2" />
                <line x1="53" y1="98" x2="83" y2="98" stroke="#AFB3BF" stroke-width="2" />
                <line x1="53" y1="253" x2="84" y2="253" stroke="#AFB3BF" stroke-width="2" />
                <line x1="53" y1="239" x2="83" y2="239" stroke="#AFB3BF" stroke-width="2" />
                <defs>
                    <linearGradient id="paint0_linear_944_1365" x1="94" y1="71.5" x2="310.5" y2="286.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#211DF1" />
                        <stop offset="1" stop-color="#EA87EC" />
                    </linearGradient>
                </defs>
            </svg>

        )
    },
];

function Services() {
    return (
        <section className='w-full flex items-center justify-center flex-col gap-20'>
            <div className='w-[90%] flex items-center justify-between'>
                <div className='font-bold text-4xl w-[40%]'>
                    <p>We are development experts on all technologies & platforms</p>
                </div>
                <div className='flex gap-10'>
                    <Button className='bg-textBlack hover:bg-gray-700 h-12 w-auto px-6'>Get Started</Button>
                    <Button className='hover:bg-textBlack bg-white border-2 border-gray-200 text-textBlack hover:text-white h-12 w-auto px-6'>Browse all our services</Button>
                </div>
            </div>

            <div className='w-[90%]'>
                <BentoGrid className="w-full mx-auto md:auto-rows-[20rem] ">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            className={cn("[&>p:text-lg] bg-transparent border-2 border-gray-100", item.className)}
                            img={item.img}
                            svg={item.svg}
                            index={i}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    )
}

export default Services
