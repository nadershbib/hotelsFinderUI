import axios from "axios";
import React, { useEffect, useState } from "react";
import "./HotelsList.css";
import HotelFinder from "../../api/HotelFinder";
import { DefaultRootState, useDispatch, useSelector } from "react-redux";
import { getHotels } from "../../redux/hotel/hotelCreators";
import { IHOTELS } from "../../interfaces/model";
import { useHistory } from "react-router-dom";
import { StarRatings } from "../../utils/StarRatings";
import Spinner from "../../utils/Spinner";

export const HotelsList = () => {
  const [loader, setLoader] = useState(false);

  let dispatch = useDispatch();

  let state = useSelector((state: any) => state);

  let history = useHistory();

  useEffect(() => {
    async function fetchHotels() {
      setLoader(true);

      dispatch(await getHotels());

      setLoader(false);
    }

    fetchHotels();
  }, []);

  const handleUpdate = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string | number
  ) => {
    e.stopPropagation();
    history.push(`/${id}/update`);
  };

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: any
  ) => {
    try {
      e.stopPropagation();
      console.log("IN DELETE");
      const response = await HotelFinder.delete(`/${id}`);
      history.push(`/${id}/update`);
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleReview = (
    e: React.MouseEvent<HTMLTableRowElement>,
    id: string | number
  ) => {
    e.stopPropagation();
    history.push(`${id}/reviews`);
  };

  const reviewStars = (avrg_rating: number) => {
    if (avrg_rating) {
      return <StarRatings rating={avrg_rating} />;
    } else {
      return <>No reviews</>;
    }
  };

  return (
    <>
      {!loader ? (
        <div className="list-group mt-4">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr className="text-center">
                <th scope="col">Hotel</th>
                <th scope="col">Location</th>
                <th scope="col">Price Range</th>
                <th scope="col">Ratings</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {state &&
                state.Hotels.map((hotel: IHOTELS) => (
                  <tr
                    className="border font-italic font-weight-bold"
                    onClick={(e) => handleReview(e, hotel.id)}
                    key={hotel.id}
                  >
                    <td>{hotel.name}</td>
                    <td>{hotel.location}</td>
                    <td>{"$".repeat(hotel.price_range)}</td>
                    <td>{reviewStars(hotel.avrg_rating)}</td>
                    <td>
                      <button
                        onClick={(e) => handleUpdate(e, hotel.id)}
                        className="btn btn-warning"
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={(e) => handleDelete(e, hotel.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <Spinner />
        </>
      )}
    </>
  );
};
