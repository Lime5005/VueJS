import { ref, computed, watch } from 'vue'
//in the useSearch() parameter: what will be filtered, and use what to match 筛选什么，用什么筛选
export default function useSearch(items, searchProps) {
    const enteredSearchTerm = ref('')
    const activeSearchTerm = ref('')

    const availableItems = computed(() => {
        let filteredItems = []
        if (activeSearchTerm.value) {
            filteredItems = items.value.filter((item) =>
                item[searchProps].includes(activeSearchTerm.value)
            );
        } else if (items.value) {
            filteredItems = items.value
        }
        return filteredItems
    })

    watch(enteredSearchTerm, function(val) {
        setTimeout(() => {
            if (val === enteredSearchTerm.value) {
                activeSearchTerm.value = val;
            }
        }, 300);
    })

    function updateSearch(val) {
        enteredSearchTerm.value = val;
    }

    return {
        enteredSearchTerm,
        availableItems,
        updateSearch
    }
}