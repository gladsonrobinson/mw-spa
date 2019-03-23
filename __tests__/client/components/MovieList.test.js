import React from "react";
import { MovieList } from "../../../src/client/components";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";

describe("Movie List Component", () => {
  it("Should render the component MovieList", () => {
    const wrapper = shallow(<MovieList />);
    expect(wrapper.exists()).toBe(true);
  });

  it("Should not render any items if list is empty", () => {
    const movies = [];
    const wrapper = shallow(<MovieList movies={movies} />);
    expect(wrapper.find(".movie-list")).toBeDefined();
    expect(wrapper.find(".movie-list__item")).toHaveLength(0);
  });

  it("Should render correctly when list is empty", () => {
    const wrapper = renderer.create(<MovieList movies={[]} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("Should not break without movies props", () => {
    const wrapper = shallow(<MovieList />);
    expect(wrapper.find(".movie-list")).toBeDefined();
    expect(wrapper.find(".movie-list__item")).toHaveLength(0);
  });

  it("Should render the complete list of items", () => {
    const movies = [
      {
        Title: "CSI: Crime Scene Investigation",
        Year: "2000–2015",
        imdbID: "tt0247082",
        Type: "series",
        Poster:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyODgwMDMzNV5BMl5BanBnXkFtZTgwMTExOTMyMjE@._V1_SX300.jpg"
      },
      {
        Title: "American Crime Story",
        Year: "2016–",
        imdbID: "tt2788432",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNzc2MzJmM2ItMjgzYy00MjgxLTljYjctZjJhYzM1ODFhMzU0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
      }
    ];
    const wrapper = shallow(<MovieList movies={movies} />);
    expect(wrapper.find(".movie-list")).toBeDefined();
    expect(wrapper.find(".movie-list__item")).toHaveLength(movies.length);
  });

  it("Should render correctly when list have items", () => {
    const movies = [
      {
        Title: "CSI: Crime Scene Investigation",
        Year: "2000–2015",
        imdbID: "tt0247082",
        Type: "series",
        Poster:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyODgwMDMzNV5BMl5BanBnXkFtZTgwMTExOTMyMjE@._V1_SX300.jpg"
      },
      {
        Title: "American Crime Story",
        Year: "2016–",
        imdbID: "tt2788432",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNzc2MzJmM2ItMjgzYy00MjgxLTljYjctZjJhYzM1ODFhMzU0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
      }
    ];
    const wrapper = renderer.create(<MovieList movies={movies} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render results when the movie changes", () => {
    const wrapper = mount(<MovieList movies={[]} />);
    wrapper.setProps({
      movies: [
        {
          Title: "CSI: Crime Scene Investigation",
          Year: "2000–2015",
          imdbID: "tt0247082",
          Type: "series",
          Poster:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyODgwMDMzNV5BMl5BanBnXkFtZTgwMTExOTMyMjE@._V1_SX300.jpg"
        }
      ]
    });
    expect(wrapper.find("img").prop("src")).toEqual(
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyODgwMDMzNV5BMl5BanBnXkFtZTgwMTExOTMyMjE@._V1_SX300.jpg"
    );
  });
});
