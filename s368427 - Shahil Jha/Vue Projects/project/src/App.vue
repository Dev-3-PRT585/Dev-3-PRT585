<script setup>
// import Button from "primevue/button"
import image from "@/assets/images/test.png"

</script>

<template>
  <!-- <div class="text-4xl">bofadex</div>

  <div><img :src="image" /></div> -->

  <div class="min-h-screen flex relative lg:static surface-ground">
    <div id="app-sidebar"
      class="surface-section h-full lg:h-auto hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
      style="width:280px">
      <div class="flex flex-column h-full">
        <div class="flex align-items-center px-5 flex-shrink-0" style="height:60px">
          <img :src="image" alt="Image" height="30" />
        </div>
        <div class="overflow-y-auto">
          <ul class="list-none p-3 m-0">
            <li>
              <div v-ripple class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
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
              <div v-ripple class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
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
            <img ::src="image" width: 28px; height: 28px />
            <span class="font-medium">Amy Elsner</span>
          </a>
        </div>
      </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
      <div
        class="flex justify-content-between align-items-center px-5 surface-0 border-bottom-1 surface-border relative lg:static"
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
              <img :src="image" class="mr-3 lg:mr-0"
                style="width: 32px; height: 32px" />
              <div class="block lg:hidden">
                <div class="text-900 font-medium">Josephine Lillard</div>
                <span class="text-600 font-medium text-sm">Marketing Specialist</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="flex flex-column flex-auto">
        <div class="surface-section p-5">
          <div class="flex align-items-start flex-column lg:flex-row lg:justify-content-between">
            <div class="flex align-items-start flex-column md:flex-row">
              <img :src="image" class="mr-5 mb-3 lg:mb-0"
                style="width:90px;height:90px" />
              <div>
                <span class="text-900 font-medium text-3xl">Kathryn Murphy</span>
                <i class="pi pi-star text-2xl ml-4 text-yellow-500"></i>
                <div class="flex align-items-center flex-wrap text-sm">
                  <div class="mr-5 mt-3">
                    <span class="font-medium text-500">FOLLOWERS</span>
                    <div class="text-700 mt-2">333</div>
                  </div>
                  <div class="mr-5 mt-3">
                    <span class="font-medium text-500">PROJECTS</span>
                    <div class="text-700 mt-2">26</div>
                  </div>
                  <div class="mr-5 mt-3">
                    <span class="font-medium text-500">COLLECTIONS</span>
                    <div class="text-700 mt-2">17</div>
                  </div>
                  <div class="mt-3">
                    <span class="font-medium text-500">SHOTS</span>
                    <div class="text-700 mt-2">130</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-3 lg:mt-0">
              <Button icon="pi pi-bookmark" class="p-button-rounded mr-2"></Button>
              <Button icon="pi pi-heart" class="p-button-rounded p-button-success mr-2"></Button>
              <Button icon="pi pi-list" class="p-button-rounded p-button-help"></Button>
            </div>
          </div>
        </div>
        <div class="p-5">
          <div class="grid">
            <div class="col-12 lg:col-6 xl:col-3">
              <div class="surface-card shadow-2 p-3 border-1 border-50 border-round">
                <div class="flex justify-content-between mb-3">
                  <div>
                    <span class="block text-500 font-medium mb-3">Orders</span>
                    <div class="text-900 font-medium text-xl">152</div>
                  </div>
                  <div class="flex align-items-center justify-content-center bg-blue-100 border-round"
                    style="width:2.5rem;height:2.5rem">
                    <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                  </div>
                </div>
                <span class="text-green-500 font-medium">24 new </span>
                <span class="text-500">since last visit</span>
              </div>
            </div>
            <div class="col-12 lg:col-6 xl:col-3">
              <div class="surface-card shadow-2 p-3 border-1 border-50 border-round">
                <div class="flex justify-content-between mb-3">
                  <div>
                    <span class="block text-500 font-medium mb-3">Revenue</span>
                    <div class="text-900 font-medium text-xl">$2.100</div>
                  </div>
                  <div class="flex align-items-center justify-content-center bg-orange-100 border-round"
                    style="width:2.5rem;height:2.5rem">
                    <i class="pi pi-map-marker text-orange-500 text-xl"></i>
                  </div>
                </div>
                <span class="text-green-500 font-medium">%52+ </span>
                <span class="text-500">since last week</span>
              </div>
            </div>
            <div class="col-12 lg:col-6 xl:col-3">
              <div class="surface-card shadow-2 p-3 border-1 border-50 border-round">
                <div class="flex justify-content-between mb-3">
                  <div>
                    <span class="block text-500 font-medium mb-3">Customers</span>
                    <div class="text-900 font-medium text-xl">28441</div>
                  </div>
                  <div class="flex align-items-center justify-content-center bg-cyan-100 border-round"
                    style="width:2.5rem;height:2.5rem">
                    <i class="pi pi-inbox text-cyan-500 text-xl"></i>
                  </div>
                </div>
                <span class="text-green-500 font-medium">520 </span>
                <span class="text-500">newly registered</span>
              </div>
            </div>
            <div class="col-12 lg:col-6 xl:col-3">
              <div class="surface-card shadow-2 p-3 border-1 border-50 border-round">
                <div class="flex justify-content-between mb-3">
                  <div>
                    <span class="block text-500 font-medium mb-3">Comments</span>
                    <div class="text-900 font-medium text-xl">152 Unread</div>
                  </div>
                  <div class="flex align-items-center justify-content-center bg-purple-100 border-round"
                    style="width:2.5rem;height:2.5rem">
                    <i class="pi pi-comment text-purple-500 text-xl"></i>
                  </div>
                </div>
                <span class="text-green-500 font-medium">85 </span>
                <span class="text-500">responded</span>
              </div>
            </div>
            <div class="col-12 xl:col-6">
              <div class="surface-card shadow-2 border-round p-4">
                <div class="text-xl text-900 font-medium mb-5">Latest News</div>
                <ul class="list-none p-0 m-0">
                  <li class="pb-3 border-bottom-1 surface-border">
                    <div class="font-medium text-900 mb-2">Aenean euismod elementum</div>
                    <div class="line-height-3 text-600" style="max-width: 30rem">Vitae turpis massa sed elementum tempus
                      egestas sed sed risus.
                      In metus vulputate eu scelerisque felis imperdiet proin.</div>
                  </li>
                  <li class="py-3 border-bottom-1 surface-border">
                    <div class="font-medium text-900 mb-2">In iaculis nunc sed augue lacus</div>
                    <div class="line-height-3 text-600" style="max-width: 30rem">Viverra vitae congue. Nisi scelerisque
                      eu ultrices vitae auctor eu augue ut lectus.
                      Elementum eu facilisis sed odio morbi.</div>
                  </li>
                  <li class="py-3 border-bottom-1 surface-border">
                    <div class="font-medium text-900 mb-2">Proin sagittis nisl rhoncus</div>
                    <div class="line-height-3 text-600" style="max-width: 30rem">In pellentesque massa placerat duis
                      ultricies lacus. Ac feugiat sed lectus vestibulum mattis ullamcorper.</div>
                  </li>
                </ul>
                <div class="flex justify-content-between pt-3">
                  <Button label="Clear All" class="p-button-outlined p-button-secondary w-6 mr-2"></Button>
                  <Button label="New Entry" class="p-button-outlined w-6 ml-2"></Button>
                </div>
              </div>
            </div>
            <div class="col-12 xl:col-6">
              <div class="surface-card shadow-2 border-round p-4">
                <div class="flex justify-content-between align-items-center mb-5">
                  <span class="text-xl text-900 font-medium">Team Members</span>
                  <div>
                    <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded"
                      @click="$refs.cag.toggle($event)"></Button>
                    <Menu ref="cag" :popup="true" :model="items" appendTo="body"></Menu>
                  </div>
                </div>
                <ul class="list-none p-0 m-0">
                  <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                    <div class="flex">
                      <img :src="image" class="mr-3"
                        style="width: 45px; height: 45px" />
                      <div>
                        <span class="block text-900 font-medium mb-1">Janette Hudson</span>
                        <div class="text-600">UI/UX Designer</div>
                      </div>
                    </div>
                    <div class="mt-2 md:mt-0 flex flex-nowrap">
                      <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
                      <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
                      <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button>
                    </div>
                  </li>
                  <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                    <div class="flex">
                      <img :src="image" class="mr-3"
                        style="width: 45px; height: 45px" />
                      <div>
                        <span class="block text-900 font-medium mb-1">Theresa Webb Hudson</span>
                        <div class="text-600">UI/UX Designer</div>
                      </div>
                    </div>
                    <div class="mt-2 md:mt-0 flex flex-nowrap">
                      <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
                      <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
                      <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button>
                    </div>
                  </li>
                  <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                    <div class="flex">
                      <img :src="image" class="mr-3"
                        style="width: 45px; height: 45px" />
                      <div>
                        <span class="block text-900 font-medium mb-1">Arlene McCoy</span>
                        <div class="text-600">UI/UX Designer</div>
                      </div>
                    </div>
                    <div class="mt-2 md:mt-0 flex flex-nowrap">
                      <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
                      <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
                      <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button>
                    </div>
                  </li>
                  <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                    <div class="flex">
                      <img :src="image" class="mr-3"
                        style="width: 45px; height: 45px" />
                      <div>
                        <span class="block text-900 font-medium mb-1">Jacob Jones</span>
                        <div class="text-600">UI/UX Designer</div>
                      </div>
                    </div>
                    <div class="mt-2 md:mt-0 flex flex-nowrap">
                      <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
                      <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
                      <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button>
                    </div>
                  </li>
                  <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                    <div class="flex">
                      <img :src="image" class="mr-3"
                        style="width: 45px; height: 45px" />
                      <div>
                        <span class="block text-900 font-medium mb-1">James Cooper</span>
                        <div class="text-600">UI/UX Designer</div>
                      </div>
                    </div>
                    <div class="mt-2 md:mt-0 flex flex-nowrap">
                      <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
                      <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
                      <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12">
              <div class="border-round p-4">
                <div class="text-xl text-900 font-medium mb-5">Timeline</div>
                <div class="mb-5 flex">
                  <div class="flex flex-column align-items-center" style="width:2rem">
                    <span class="bg-blue-500 text-0 flex align-items-center justify-content-center border-circle p-2">
                      <i class="pi pi-compass text-xl"></i>
                    </span>
                    <div class="h-full bg-blue-500" style="width: 2px; min-height: 4rem"></div>
                  </div>
                  <div class="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
                    <div class="mb-3">
                      <span class="text-900 font-medium inline-block mr-3">Jacob Jones</span>
                      <span class="text-500 text-sm">1 minute ago</span>
                    </div>
                    <div class="line-height-3 text-700 mb-3">
                      Eu tincidunt tortor aliquam nulla facilisi cras fermentum.
                      Sollicitudin nibh sit amet commodo nulla. Mauris in aliquam sem fringilla ut morbi.
                    </div>
                    <div class="text-500 flex align-items-center gap-4">
                      <div class="flex align-items-center gap-1">
                        <i class="pi pi-heart"></i>
                        <span>0</span>
                      </div>
                      <div class="flex align-items-center gap-1">
                        <i class="pi pi-comment"></i>
                        <span>1</span>
                      </div>
                      <div class="flex align-items-center gap-1">
                        <i class="pi pi-eye"></i>
                        <span>24</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-5 flex">
                  <div class="flex flex-column align-items-center" style="width:2rem">
                    <span class="bg-orange-500 text-0 flex align-items-center justify-content-center border-circle p-2">
                      <i class="pi pi-list text-xl"></i>
                    </span>
                    <div class="h-full bg-orange-500" style="width: 2px; min-height: 4rem"></div>
                  </div>
                  <div class="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
                    <div class="mb-3">
                      <span class="text-900 font-medium inline-block mr-3">Theresa Webb</span>
                      <span class="text-500 text-sm">2 hours ago</span>
                    </div>
                    <div class="line-height-3 text-700 mb-3">
                      Purus sit amet volutpat consequat mauris. Pretium lectus quam id leo in vitae.
                      Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.
                    </div>
                    <div class="text-500 flex align-items-center gap-4">
                      <div class="flex align-items-center gap-1">
                        <i class="pi pi-heart"></i>
                        <span>26</span>
                      </div>
                      <div class="flex align-items-center gap-1">
                        <i class="pi pi-comment"></i>
                        <span>6</span>
                      </div>
                      <div class="flex align-items-center gap-1">
                        <i class="pi pi-eye"></i>
                        <span>673</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-5 flex">
                  <div class="flex flex-column align-items-center" style="width:2rem">
                    <span class="bg-purple-500 text-0 flex align-items-center justify-content-center border-circle p-2">
                      <i class="pi pi-inbox text-xl"></i>
                    </span>
                    <div class="h-full bg-purple-500" style="width: 2px; min-height: 4rem"></div>
                  </div>
                  <div class="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
                    <div class="mb-3">
                      <span class="text-900 font-medium inline-block mr-3">Walter Black</span>
                      <span class="text-500 text-sm">4 hours ago</span>
                    </div>
                    <div class="line-height-3 text-700 mb-3">
                      Euismod in pellentesque massa placerat duis ultricies lacus.
                      Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
                    </div>
                    <div class="text-500 flex align-items-center gap-4">
                      <div class="flex align-items-center gap-1">
                        <i class="pi pi-heart"></i>
                        <span>62</span>
                      </div>
                      <div class="flex align-items-center gap-1">
                        <i class="pi pi-comment"></i>
                        <span>36</span>
                      </div>
                      <div class="flex align-items-center gap-1">
                        <i class="pi pi-eye"></i>
                        <span>21</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

