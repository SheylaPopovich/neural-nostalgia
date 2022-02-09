import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { GET_ALL_USERS } from "../../utils/queries";


export default function Settings({ users, projectId }) {

      // Form handlers
  const [newUser, setNewUser] = useState({ label: "", id: "" });
  const [errorMessage, setErrorMessage] = useState("");

  // Gets all the user
  const { data } = useQuery(GET_ALL_USERS);
  const userData = data?.users || [];

  