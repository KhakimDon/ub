<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
</script>

  <script>
export default {
  methods:{
   
  }
};
</script>


<template>
  <div
    id="table"
    class="overflow-x-auto rounded-[10px] overflow-y-scroll w-full"
  >

    <div class="collapse rounded-[10px] my-[10px]">
      <input type="checkbox" class="peer" />

      <div
        class="collapse-title text-[red] flex items-center justify-between text-primary-content text-[20px] peer-checked:bg-[red] peer-checked:text-[white]-content bg-[#444]"
      >
        <span>Группа 295</span>  <button class="btn bg-[red] text-white text-[10px] mr-[-20px]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
</svg>
</button>
      </div>

      <div class="collapse-content   p-[0] text-primary-content peer-checked:bg-[transparent] peer-checked:text-[white]-content"
      >
        <table class="table rounded-[0] w-[100%]">
          <tbody>
            <!-- row 1 -->
           
            <tr @click="this.$router.push(`/student`)">
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="../assets/images/photo_2022-03-30_15-01-14.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-white">Hart Hagerty</div>
                    <div class="text-sm opacity-50 text-white">
                      United States
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span
                  class="bg-[transparent] text-[white] w-[100%] py-[20px] text-[20px] badge badge-ghost badge-sm"
                  >9.5</span
                >
              </td>
            </tr>

            <tr @click="this.$router.push(`/student`)">
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="../assets/images/photo_2022-03-30_15-01-14.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-white">Hart Hagerty</div>
                    <div class="text-sm opacity-50 text-white">
                      United States
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span
                  class="bg-[transparent] text-[white] w-[100%] py-[20px] text-[20px] badge badge-ghost badge-sm"
                  >9.5</span
                >
              </td>
            </tr>

            <tr @click="this.$router.push(`/student`)">
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="../assets/images/photo_2022-03-30_15-01-14.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-white">Hart Hagerty</div>
                    <div class="text-sm opacity-50 text-white">
                      United States
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span
                  class="bg-[transparent] text-[white] w-[100%] py-[20px] text-[20px] badge badge-ghost badge-sm"
                  >9.5</span
                >
              </td>
            </tr>

            <tr @click="this.$router.push(`/student`)">
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="../assets/images/photo_2022-03-30_15-01-14.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-white">Hart Hagerty</div>
                    <div class="text-sm opacity-50 text-white">
                      United States
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span
                  class="bg-[transparent] text-[white] w-[100%] py-[20px] text-[20px] badge badge-ghost badge-sm"
                  >9.5</span
                >
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>

    <div class="collapse rounded-[10px] my-[10px]">
      <input type="checkbox" class="peer" />

      <div
        class="collapse-title text-[red] flex items-center justify-between text-primary-content text-[20px] peer-checked:bg-[red] peer-checked:text-[white]-content bg-[#444]"
      >
        <span>Группа 295</span>  <button class="btn bg-[red] text-white text-[10px] mr-[-20px]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
</svg>
</button>
      </div>
      <div
        class="collapse-content   p-[0] text-primary-content peer-checked:bg-[transparent] peer-checked:text-[white]-content"
      >
        <table class="table rounded-[0] w-[100%]">
          <tbody>
            <!-- row 1 -->
           
            <tr @click="this.$router.push(`/student`)">
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="../assets/images/photo_2022-03-30_15-01-14.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-white">Hart Hagerty</div>
                    <div class="text-sm opacity-50 text-white">
                      United States
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span
                  class="bg-[transparent] text-[white] w-[100%] py-[20px] text-[20px] badge badge-ghost badge-sm"
                  >9.5</span
                >
              </td>
            </tr>
            <tr @click="this.$router.push(`/student`)">
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="../assets/images/photo_2022-03-30_15-01-14.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-white">Hart Hagerty</div>
                    <div class="text-sm opacity-50 text-white">
                      United States
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span
                  class="bg-[transparent] text-[white] w-[100%] py-[20px] text-[20px] badge badge-ghost badge-sm"
                  >9.5</span
                >
              </td>
            </tr>
            <tr @click="this.$router.push(`/student`)">
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="../assets/images/photo_2022-03-30_15-01-14.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-white">Hart Hagerty</div>
                    <div class="text-sm opacity-50 text-white">
                      United States
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span
                  class="bg-[transparent] text-[white] w-[100%] py-[20px] text-[20px] badge badge-ghost badge-sm"
                  >9.5</span
                >
              </td>
            </tr>
            <tr @click="this.$router.push(`/student`)">
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="../assets/images/photo_2022-03-30_15-01-14.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-white">Hart Hagerty</div>
                    <div class="text-sm opacity-50 text-white">
                      United States
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span
                  class="bg-[transparent] text-[white] w-[100%] py-[20px] text-[20px] badge badge-ghost badge-sm"
                  >9.5</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="collapse rounded-[10px] my-[10px]">
      <input type="checkbox" class="peer" />

      <div
        class="collapse-title text-[red] flex items-center justify-between text-primary-content text-[20px] peer-checked:bg-[red] peer-checked:text-[white]-content bg-[#444]"
      >
        <span>Группа 295</span>  <button class="btn bg-[red] text-white text-[10px] mr-[-20px]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
</svg>
</button>
      </div>
      <div
        class="collapse-content   p-[0] text-primary-content peer-checked:bg-[transparent] peer-checked:text-[white]-content"
      >
        <table class="table rounded-[0] w-[100%]">
          <tbody>
            <!-- row 1 -->
           
            <tr @click="this.$router.push(`/student`)">
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="../assets/images/photo_2022-03-30_15-01-14.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-white">Hart Hagerty</div>
                    <div class="text-sm opacity-50 text-white">
                      United States
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span
                  class="bg-[transparent] text-[white] w-[100%] py-[20px] text-[20px] badge badge-ghost badge-sm"
                  >9.5</span
                >
              </td>
            </tr>
            <tr @click="this.$router.push(`/student`)">
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="../assets/images/photo_2022-03-30_15-01-14.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-white">Hart Hagerty</div>
                    <div class="text-sm opacity-50 text-white">
                      United States
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span
                  class="bg-[transparent] text-[white] w-[100%] py-[20px] text-[20px] badge badge-ghost badge-sm"
                  >9.5</span
                >
              </td>
            </tr>
            <tr @click="this.$router.push(`/student`)">
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="../assets/images/photo_2022-03-30_15-01-14.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-white">Hart Hagerty</div>
                    <div class="text-sm opacity-50 text-white">
                      United States
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span
                  class="bg-[transparent] text-[white] w-[100%] py-[20px] text-[20px] badge badge-ghost badge-sm"
                  >9.5</span
                >
              </td>
            </tr>
            <tr @click="this.$router.push(`/student`)">
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="../assets/images/photo_2022-03-30_15-01-14.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold text-white">Hart Hagerty</div>
                    <div class="text-sm opacity-50 text-white">
                      United States
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <span
                  class="bg-[transparent] text-[white] w-[100%] py-[20px] text-[20px] badge badge-ghost badge-sm"
                  >9.5</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
   
  </div>
</template>
  

  
  <style scoped>
span {
  border: none !important;
}
#table {
  height: calc(100vh - 205px);
}
th {
  color: white;
  background: rgb(41, 41, 41);
}
td {
  border-color: rgba(75, 75, 75, 0.714) !important;
  background: rgba(44, 44, 44, 0.608);
}
</style>