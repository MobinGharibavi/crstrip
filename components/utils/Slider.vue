<template>
  <div class="flex gap-2 mt-2.5 flex-col">
    <div class="container mt-6">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card mb-4">
              <div class="card-body">
                <div class="my-5 mx-3" id="slider">
                  <svg
                    class="handle-circle-lower"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21"
                    />
                  </svg>
                  <svg
                    class="handle-circle-upper"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-2 items-center">
      <div class="flex items-start flex-col">
        <label for="from" class="text-gray-500">From</label>
        <input
          id="from"
          type="text"
          v-model="from"
          class="border px-2 rounded focus:outline-none w-full"
        />
      </div>
      <div class="flex items-start flex-col">
        <label for="to" class="text-gray-500">to</label>
        <input
          id="to"
          type="text"
          v-model="to"
          class="border px-2 rounded focus:outline-none w-full"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const from = ref(0);
const to = ref(100);
onMounted(() => {
  (function () {
    const slider = document.getElementById("slider");
    noUiSlider.create(slider, {
      start: [from.value, to.value],
      behaviour: "tap",
      direction: "rtl",
      connect: true,
      tooltips: true,
      range: {
        min: 0,
        max: 500,
      },
    });

    function updateTooltipWithIcon() {
      var tooltips = slider.querySelector(".noUi-handle-lower .noUi-tooltip");
      tooltips.innerHTML =
        '<svg class="rotate-180" xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="currentColor" d="M15 17.898c0 1.074-1.265 1.648-2.073.941l-6.31-5.522a1.75 1.75 0 0 1 0-2.634l6.31-5.522c.808-.707 2.073-.133 2.073.941z"/></svg>'; // Add icon to tooltip content

      var tooltips2 = slider.querySelector(".noUi-handle-upper .noUi-tooltip");
      tooltips2.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="currentColor" d="M15 17.898c0 1.074-1.265 1.648-2.073.941l-6.31-5.522a1.75 1.75 0 0 1 0-2.634l6.31-5.522c.808-.707 2.073-.133 2.073.941z"/></svg>'; // Add icon to tooltip content    });
    }

    slider.noUiSlider.on("update", function () {
      updateTooltipWithIcon();
    });

    slider.noUiSlider.on("update", function (values, handle) {
      const value = values[handle];

      if (handle) {
        from.value = Math.round(value);
      } else {
        to.value = Math.round(value);
      }
    });
  })();
});
</script>
