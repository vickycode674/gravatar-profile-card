import { useState } from "react";

const UserForm = ({ onSubmit }) => {

    //here we are storing state for userinput
    const [formData, setFormData] = useState({ //receive the info and used for object reference
        email: "",
        username: "",
        fullname: "",
        phone: "",
        location: "",
        bio: "",
        website: "",
    })

    const handleChange = (e) => {  //handling all spontaneous changes in the form and updating instantly
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmitData = (e) => {
        e.preventDefault(); //stop the automatic reload
        onSubmit(formData); //sending the information to main parent componenet via calling fucntion
        setFormData({ //clean the values once submitted
            email: "",
            username: "",
            fullname: "",
            phone: "",
            location: "",
            bio: "",
            website: "",
          });
    }

    return (
        <div className=" mx-auto  p-8 bg-white shadow-xl rounded-2xl">
            <h2 className="text-2xl font-bold text-center mb-4">Gravatar User Profile Form</h2>
            <form onSubmit={handleSubmitData} //main fucntion where it send data back to parent props by passing
             className="space-y-4  w-96"> 
                <div className="flex items-center gap-3"> 
                    <label className="w-1/3 text-gray-700 font-semibold">
                    Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={formData.email} //directly link the value
                        onChange={handleChange}  //update on change
                        required
                        />
                </div>

                <div className="flex items-center gap-3">
                    <label className="w-1/3 text-gray-700 font-semibold">
                        Full Name <span className="text-red-500">*</span>

                    </label>
                    <input
                        type="text"
                        name="fullname"
                        className="w-full p-2 border rounded"
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex items-center gap-3">
                    <label className="w-1/3 text-gray-700 font-semibold">
                        Username</label>
                    <input
                        type="text"
                        name="username"
                        className="w-full p-2 border rounded"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex items-center gap-3">
                    <label className="w-1/3 text-gray-700 font-semibold">
                        Phone Number</label>
                    <div className="flex w-2/3 items-center border rounded">
                        <span className="px-2 text-gray-600">+91</span>
                        <input
                            type="tel"
                            name="phone"
                            className="w-full p-2 border-l-0 rounded-r"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                            maxLength="10" // added maxLength
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <label className="w-1/3 text-gray-700 font-semibold">
                        Location (City, Country)</label>
                    <input
                        type="text"
                        name="location"
                        className="w-full p-2 border rounded"
                        value={formData.location}
                        pattern="[A-Za-z\s]+" // Only letters and spaces
                        onChange={handleChange}
                        placeholder="Enter The name of city"
                    />
                </div>


                <div className="flex items-center gap-3">
                    <label className="w-1/3 text-gray-700 font-semibold">
                        Bio/Short Description</label>
                    <textarea
                        name="bio"
                        className="w-full p-2 border rounded"
                        value={formData.bio}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="flex items-center gap-3">
                    <label className="w-1/3 text-gray-700 font-semibold">
                        Website/Social Profile</label>
                    <input
                        type="url"
                        name="website"
                        className="w-full p-2 border rounded"
                        value={formData.website}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded"> 
                    Submit
                </button>
            </form>
        </div>
    )

}
export default UserForm;
