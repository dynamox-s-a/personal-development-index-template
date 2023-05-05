import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";

const reducer = {
  products: productsReducer,
  cart: cartReducer,
};

export const store = configureStore({
  reducer,
});

export function getStoreWithState(preloadedState?: RootState) {
  return configureStore({
    reducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// A função getStoreWithState serve para criar uma instância do store do Redux com um estado inicial pré-carregado. O objeto preloadedState é o estado inicial que será usado para inicializar o store.

// A ideia é que, em algum momento antes de iniciar a aplicação, você possa obter o estado inicial a partir de alguma fonte (por exemplo, carregar o estado a partir do armazenamento local do navegador) e passá-lo como argumento para a função getStoreWithState. Desta forma, o estado inicial do store será o estado pré-carregado, ao invés de ser o estado padrão.

// Você pode salvar o estado no armazenamento local e carregá-lo diretamente de lá, mas há alguns motivos pelos quais usar a função getStoreWithState pode ser útil:

// 1 - Abstração: A função getStoreWithState abstrai o processo de criar o store e carregar o estado inicial. Em vez de ter que escrever o código para carregar o estado no local storage e passá-lo para o configureStore em vários lugares da aplicação, você pode chamar a função getStoreWithState em um único lugar e ter certeza de que o store será criado e configurado corretamente. Isso pode ajudar a tornar o seu código mais limpo e fácil de manter.

// 2- Flexibilidade: Além de abstrair o processo de criação do store, a função getStoreWithState também oferece flexibilidade. Por exemplo, você pode usar a mesma função para criar vários stores com estados diferentes, o que pode ser útil em cenários de teste. Além disso, se você quiser mudar a forma como o estado inicial é carregado ou configurado, pode fazê-lo mudando a lógica dentro da função getStoreWithState, sem precisar mudar a forma como a aplicação usa o store.

// Em resumo, usar a função getStoreWithState pode ajudar a tornar o seu código mais limpo, fácil de manter e flexível, e é uma boa prática para a gestão do estado em aplicações React.