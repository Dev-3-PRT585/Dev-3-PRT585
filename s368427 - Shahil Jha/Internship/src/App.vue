<script setup>
import testImage from '@/assets/images/test.png'
</script>

<template>
    <div>
        bofadez
    </div>
    <!-- <div class="min-h-screen flex relative lg:static surface-ground">
        <div id="app-sidebar"
            class="surface-section h-full lg:h-auto hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
            style="width:280px">
            <div class="flex flex-column h-full">
                <div class="flex align-items-center px-5 flex-shrink-0" style="height:60px">
                    <img :src="testImage" alt="Image" height="30" />
                </div>
                <div class="overflow-y-auto">
                    <ul class="list-none p-3 m-0">
                        <li>
                            <div v-ripple
                                class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                                <span class="font-medium">FAVORITES</span>
                                <i class="pi pi-chevron-down"></i>
                            </div>
                            <ul class="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <a v-ripple
                                        class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-home mr-2"></i>
                                        <span class="font-medium">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple
                                        class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-bookmark mr-2"></i>
                                        <span class="font-medium">Bookmarks</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple
                                        class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                        v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                                        <i class="pi pi-chart-line mr-2"></i>
                                        <span class="font-medium">Reports</span>
                                        <i class="pi pi-chevron-down ml-auto"></i>
                                    </a>
                                    <ul
                                        class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                        <li>
                                            <a v-ripple
                                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Revenue</span>
                                                <i class="pi pi-chevron-down ml-auto"></i>
                                            </a>
                                            <ul
                                                class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                <li>
                                                    <a v-ripple
                                                        class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                        <i class="pi pi-table mr-2"></i>
                                                        <span class="font-medium">View</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a v-ripple
                                                        class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                        <i class="pi pi-search mr-2"></i>
                                                        <span class="font-medium">Search</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a v-ripple
                                                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                                <i class="pi pi-chart-line mr-2"></i>
                                                <span class="font-medium">Expenses</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a v-ripple
                                        class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-users mr-2"></i>
                                        <span class="font-medium">Team</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple
                                        class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-comments mr-2"></i>
                                        <span class="font-medium">Messages</span>
                                        <span
                                            class="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle"
                                            style="min-width: 1.5rem; height: 1.5rem">3</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple
                                        class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-calendar mr-2"></i>
                                        <span class="font-medium">Calendar</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple
                                        class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-cog mr-2"></i>
                                        <span class="font-medium">Settings</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="list-none p-3 m-0">
                        <li>
                            <div v-ripple
                                class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                                v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'slidedown', leaveToClass: 'hidden', leaveActiveClass: 'slideup' }">
                                <span class="font-medium">APPLICATION</span>
                                <i class="pi pi-chevron-down"></i>
                            </div>
                            <ul class="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <a v-ripple
                                        class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-folder mr-2"></i>
                                        <span class="font-medium">Projects</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple
                                        class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-chart-bar mr-2"></i>
                                        <span class="font-medium">Performance</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple
                                        class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-cog mr-2"></i>
                                        <span class="font-medium">Settings</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="mt-auto">
                    <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                    <a v-ripple
                        class="m-3 flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                        <img :src="testImage" class="mr-2"
                            style="width: 28px; height: 28px" />
                        <span class="font-medium">Amy Elsner</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="min-h-screen flex flex-column relative flex-auto">
            <div class="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static"
                style="height:60px">
                <div class="flex">
                    <a v-ripple class="cursor-pointer block lg:hidden text-700 mr-3 mt-1 p-ripple"
                        v-styleclass="{ selector: '#app-sidebar', enterClass: 'hidden', enterActiveClass: 'fadeinleft', leaveToClass: 'hidden', leaveActiveClass: 'fadeoutleft', hideOnOutsideClick: true }">
                        <i class="pi pi-bars text-4xl"></i>
                    </a>
                    <span class="p-input-icon-left">
                        <i class="pi pi-search"></i>
                        <InputText type="text" class="border-none w-10rem sm:w-20rem" placeholder="Search" />
                    </span>
                </div>
                <a v-ripple class="cursor-pointer block lg:hidden text-700 p-ripple"
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                    <i class="pi pi-ellipsis-v text-2xl"></i>
                </a>
                <ul
                    class="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row 
                surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                    <li>
                        <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                            <span class="block lg:hidden font-medium">Inbox</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                            <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                            <span class="block lg:hidden font-medium">Notifications</span>
                        </a>
                    </li>
                    <li class="border-top-1 surface-border lg:border-top-none">
                        <a v-ripple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors p-ripple">
                            <img :src="testImage" class="mr-3 lg:mr-0"
                                style="width: 32px; height: 32px" />
                            <div class="block lg:hidden">
                                <div class="text-900 font-medium">Josephine Lillard</div>
                                <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div> -->
</template>

<style lang="scss">
@import './assets/styles/app/layout.scss';
</style>
