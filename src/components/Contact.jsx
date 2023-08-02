import React from "react";

function Contact() {
	return (
		<div id="contact" className=" text-center max-w-xl mx-auto pb-8 pt-12 px-4">
			<div>
				<h1 className="pb-4">Contact Us!</h1>
				<hr className="pb-4 w-20 mx-auto" />
				<p className=" max-w-md mx-auto pb-8">
					To schedule an appointment, either fill out the form below, call/text
					979-709-7297, or email mb@shampoochme.pet
				</p>
				<form className=" flex flex-wrap">
					<label className="flex flex-col mb-4 w-[48%] mr-auto">
						<span className="mb-1">Name</span>
						<input
							type="text"
							name="name"
							className="max-md:text-sm bg-gray-100 border border-black p-2"
							placeholder="What's your name?"
						/>
					</label>
					<label className="flex flex-col mb-4 w-[48%] ml-auto">
						<span className="mb-1">Phone</span>
						<input
							type="phone"
							name="phone"
							className="max-md:text-sm bg-gray-100 border border-black p-2"
							placeholder="What's your phone number?"
						/>
					</label>
					<label className="flex flex-col mb-4 w-full">
						<span className="mb-1">Email</span>
						<input
							type="email"
							name="email"
							className="max-md:text-sm bg-gray-100 border border-black p-2"
							placeholder="What's your email?"
						/>
					</label>
					<label className="flex flex-col mb-4 w-full">
						<span className="mb-1">Message</span>
						<textarea
							rows="7"
							type="message"
							name="message"
							className="bg-gray-100 border border-black p-2 max-md:text-sm "
							placeholder="What's your address, phone number, and puppie's breed?"
						/>
					</label>
					<div className=" flex justify-center w-full">
						{" "}
						<button className=" bg-custom-pink p-3 px-4 rounded-xl text-white font-semibold ">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Contact;
