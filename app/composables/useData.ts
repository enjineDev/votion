export const postData = async (path, data) => {
  try {
    return await useFetch('/api/' + path || '', {
      method: 'POST',
      body: { data }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const putData = async (path, data) => {
  try {
    return await useFetch('/api/' + path || '', {
      method: 'PUT',
      body: { data }
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getData = async (path) => {
  try {
    const { data } = await useFetch('/api/' + path || '', {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}

export const fetchData = async (path) => {
  try {
    const { data } = await useFetch('/api/', {
      method: 'GET'
    })
    return data.value
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteData = async (path) => {
  try {
    return await useFetch('/api/' + path || '', {
      method: 'DELETE'
    })
  } catch (error) {
    throw new Error(error)
  }
}
