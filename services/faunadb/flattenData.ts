export const flattenData = (obj: any) => {
  if (!obj) return null;

  if (Array.isArray(obj.data)) {
    return {
      ...obj,
      data: obj.data.map((e: any) => flattenData(e)),
    };
  } else {
    return { ...obj.data, id: obj.ref.value.id };
  }
};