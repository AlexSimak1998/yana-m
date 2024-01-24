import { createStore } from 'vuex';

export default createStore({
    state: {
        dateBackend: [],
        currentCard: {}
    },
    actions: { 
        async DateFromBackend(ctx) {
            try {
                const res = await fetch('https://back.miktadov.com/api/yana/productions/');
                let dateBackend = await res.json();

                // Функция для обновления URL до https
                const formatImageUrl = (url) => {
                    if (!url) return '';
                    if (url.startsWith('http://')) {
                        return `https${url.substring(4)}`;
                    }
                    return url;
                };

                // Обновление URL в данных
                dateBackend.results = dateBackend.results.map(item => ({
                    ...item,
                    images: item.images.map(image => ({
                        ...image,
                        image: formatImageUrl(image.image)
                    }))
                }));

                ctx.commit('updateDateBackend', dateBackend);
            } catch (error) {
                console.error("Ошибка при получении данных с бэкенда:", error);
            }
        }
    },
    mutations: {
        updateDateBackend(state, dateBackend) {
            state.dateBackend = dateBackend;
        },
        setCurrentCard(state, card) {
            state.currentCard = card;
        }
    },
    getters: {
        DateBackend(state) {
            return state.dateBackend;
        },
        getCurrentCard(state) {
            return state.currentCard;
        }
    },
});