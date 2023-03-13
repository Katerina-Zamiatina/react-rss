import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'https://fakestoreapi.com/',
  baseURL: 'https://api.artic.edu/api/v1/',
});

// "id": 102192,
// "title": "Vesuvius III",
// "thumbnail": {
// "lqip": "data:image/gif;base64,R0lGODlhAwAFAPMAAI43PI86PpZBRphARZlBR5VESJZESJhGSphHSptITJ1KT59QU59WWaBMUKRcXwAAACH5BAAAAAAALAAAAAADAAUAAAQL0CGWglDlEGDaWBEAOw==",
// "width": 1622,
// "height": 2474,
// "alt_text": "A work made of relief etching in brownish-red on ivory wove paper."
// },
// "main_reference_number": "1984.137",
// "date_display": "1982",
// "artist_display": "Janet Stayton\nAmerican, born 1939",
// "place_of_origin": "United States",
// "department_title": "Prints and Drawings"

export type ArtworkT = {
  id: number;
  title: string;
  thumbnail: {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
  };
  date_display: string;
  artist_display: string;
  place_of_origin: string;
  department_title: string;
};

export const getArtWorks = async () => {
  try {
    const { data } = await axiosInstance.get(
      'artworks?fields=id,title,artist_display,date_display,thumbnail,place_of_origin,department_title,style_title,image_url&search?query[term][is_public_domain]=true'
    );
    const result: ArtworkT[] = data.data;
    console.log(result)
    return result;
  } catch (error) {
    console.error(`Error fetching books: ${error}`);
    return [];
  }
};
