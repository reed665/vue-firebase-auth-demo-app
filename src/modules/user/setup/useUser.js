/* eslint-disable arrow-body-style */
import { ref } from '@vue/composition-api';

const user = ref(null);

const setUser = (userData) => {
  user.value = userData;
};

const useUser = () => {
  return {
    setUser,
    user,
  };
};

export default useUser;
