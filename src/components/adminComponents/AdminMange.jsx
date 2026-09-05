import { useState } from "react";

import useAuth from "../../hooks/useAuth.jsx";
import useAdminData from "../../hooks/useAdminData.jsx";
import toast from "react-hot-toast";

import {
  Users,
  PackagePlus,
  ShieldCheck,
  Mail,
  Lock,
  User,
  Tag,
  Layers,
  Shirt,
  DollarSign,
  Percent,
  Star,
  Image as ImageIcon,
} from "lucide-react";

const AdminMange = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const [password, setPassword] = useState("");

  const { handleRegister, handleAddUser } = useAuth();
  const { handleAddProduct } = useAdminData();

  const handleRegisterUser = async (e) => {
    e.preventDefault();

    try {
      const data = await handleAddUser(
        username,
        email,
        password,
        role
      );
    } catch (error) {
      console.error("Error in handleRegisterUser:", error);
      toast.error("Failed to register user");
    }
  };

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    dressCode: "",
    gender: "men",
    style: "",
    image: "",
    images: "",
    description: "",
    price: "",
    originalPrice: "",
    discount: "",
    colors: "",
    rating: 4.5,
    isTopSelling: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    const addProduct = await handleAddProduct(formData);
  };

  return (
    <div className="min-h-screen w-full bg-[#f7f7f7] text-black">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">

        {/* =====================================================
            PAGE HEADER
        ====================================================== */}

        <div className="mb-8 overflow-hidden rounded-2xl bg-black text-white shadow-xl">
          <div className="relative px-6 py-7 sm:px-8 sm:py-9">

            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute bottom-0 left-1/2 h-24 w-24 rounded-full bg-white/5 blur-2xl" />

            <div className="relative flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white text-black shadow-lg">
                <ShieldCheck size={23} strokeWidth={2.2} />
              </div>

              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  Administration
                </p>

                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Admin Management
                </h1>

                <p className="mt-1.5 max-w-2xl text-xs leading-5 text-gray-400 sm:text-sm">
                  Manage user accounts and add products directly from your
                  administration panel.
                </p>
              </div>
            </div>

            {/* Small bottom info */}
            <div className="relative mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-4 text-[11px] text-gray-400">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                User Management
              </span>

              <span className="h-3 w-px bg-white/15" />

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                Product Management
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-8">

          {/* =====================================================
              CREATE USER
          ====================================================== */}

          <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

            {/* Section Header */}
            <div className="bg-black px-6 py-5 text-white sm:px-8">
              <div className="flex items-center justify-between gap-4">

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-black">
                    <Users size={17} strokeWidth={2.2} />
                  </div>

                  <div>
                    <h2 className="text-base font-bold">
                      Create New User
                    </h2>

                    <p className="mt-0.5 text-[11px] text-gray-400">
                      Add a new account to your system.
                    </p>
                  </div>
                </div>

                <span className="hidden rounded-full border border-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400 sm:block">
                  User
                </span>
              </div>
            </div>

            {/* User Form */}
            <form
              onSubmit={(e) => handleRegisterUser(e)}
              className="p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* Username */}
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-800">
                    Username
                  </label>

                  <div className="relative">
                    <User
                      size={17}
                      strokeWidth={1.8}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter username"
                      className="
                        h-12 w-full rounded-xl
                        border border-gray-300
                        bg-white
                        pl-11 pr-4
                        text-sm font-medium text-black
                        outline-none
                        transition-all
                        placeholder:text-gray-400
                        hover:border-gray-400
                        focus:border-black
                        focus:ring-2 focus:ring-black/10
                      "
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-800">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={17}
                      strokeWidth={1.8}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email address"
                      className="
                        h-12 w-full rounded-xl
                        border border-gray-300
                        bg-white
                        pl-11 pr-4
                        text-sm font-medium text-black
                        outline-none
                        transition-all
                        placeholder:text-gray-400
                        hover:border-gray-400
                        focus:border-black
                        focus:ring-2 focus:ring-black/10
                      "
                    />
                  </div>
                </div>

                {/* Role */}
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-800">
                    User Role
                  </label>

                  <select
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="
                      h-12 w-full cursor-pointer rounded-xl
                      border border-gray-300
                      bg-white
                      px-4
                      text-sm font-medium text-black
                      outline-none
                      transition-all
                      hover:border-gray-400
                      focus:border-black
                      focus:ring-2 focus:ring-black/10
                    "
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                {/* Password */}
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-800">
                    Password
                  </label>

                  <div className="relative">
                    <Lock
                      size={17}
                      strokeWidth={1.8}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className="
                        h-12 w-full rounded-xl
                        border border-gray-300
                        bg-white
                        pl-11 pr-4
                        text-sm font-medium text-black
                        outline-none
                        transition-all
                        placeholder:text-gray-400
                        hover:border-gray-400
                        focus:border-black
                        focus:ring-2 focus:ring-black/10
                      "
                    />
                  </div>
                </div>
              </div>

              {/* User Form Footer */}
              <div className="mt-7 flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold text-gray-700">
                    Account Information
                  </p>

                  <p className="mt-1 text-[11px] text-gray-400">
                    Make sure the entered details are correct.
                  </p>
                </div>

                <button
                  type="submit"
                  className="
                    inline-flex h-11
                    items-center justify-center
                    gap-2 rounded-xl
                    bg-black px-6
                    text-sm font-bold text-white
                    shadow-sm
                    transition-all
                    hover:bg-gray-800
                    active:scale-[0.98]
                  "
                >
                  <Users size={16} />
                  Create User
                </button>
              </div>
            </form>
          </section>

          {/* =====================================================
              ADD PRODUCT
          ====================================================== */}

          <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

            {/* Product Header */}
            <div className="bg-black px-6 py-5 text-white sm:px-8">
              <div className="flex items-center justify-between gap-4">

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-black">
                    <PackagePlus size={17} strokeWidth={2.2} />
                  </div>

                  <div>
                    <h2 className="text-base font-bold">
                      Add New Product
                    </h2>

                    <p className="mt-0.5 text-[11px] text-gray-400">
                      Enter product details to list a new item.
                    </p>
                  </div>
                </div>

                <span className="hidden rounded-full border border-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400 sm:block">
                  Product
                </span>
              </div>
            </div>

            {/* Product Form */}
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8"
            >

              {/* ================= BASIC INFORMATION ================= */}

              <div className="mb-7">
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-5 w-1 rounded-full bg-black" />

                  <div>
                    <h3 className="text-sm font-bold text-black">
                      Basic Information
                    </h3>

                    <p className="text-[11px] text-gray-400">
                      General information about the product.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  {/* Title */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-800">
                      Product Title
                    </label>

                    <div className="relative">
                      <Tag
                        size={17}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="e.g. Graphic T-Shirt"
                        required
                        className="
                          h-12 w-full rounded-xl
                          border border-gray-300
                          bg-white pl-11 pr-4
                          text-sm font-medium text-black
                          outline-none
                          transition-all
                          placeholder:text-gray-400
                          hover:border-gray-400
                          focus:border-black
                          focus:ring-2 focus:ring-black/10
                        "
                      />
                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-800">
                      Category
                    </label>

                    <div className="relative">
                      <Layers
                        size={17}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        placeholder="e.g. Casual"
                        required
                        className="
                          h-12 w-full rounded-xl
                          border border-gray-300
                          bg-white pl-11 pr-4
                          text-sm font-medium text-black
                          outline-none
                          transition-all
                          placeholder:text-gray-400
                          hover:border-gray-400
                          focus:border-black
                          focus:ring-2 focus:ring-black/10
                        "
                      />
                    </div>
                  </div>

                  {/* Dress Code */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-800">
                      Dress Code
                    </label>

                    <div className="relative">
                      <Shirt
                        size={17}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="text"
                        name="dressCode"
                        value={formData.dressCode}
                        onChange={handleChange}
                        placeholder="e.g. Streetwear"
                        required
                        className="
                          h-12 w-full rounded-xl
                          border border-gray-300
                          bg-white pl-11 pr-4
                          text-sm font-medium text-black
                          outline-none
                          transition-all
                          placeholder:text-gray-400
                          hover:border-gray-400
                          focus:border-black
                          focus:ring-2 focus:ring-black/10
                        "
                      />
                    </div>
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-800">
                      Gender
                    </label>

                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                      className="
                        h-12 w-full cursor-pointer rounded-xl
                        border border-gray-300
                        bg-white px-4
                        text-sm font-medium text-black
                        outline-none
                        transition-all
                        hover:border-gray-400
                        focus:border-black
                        focus:ring-2 focus:ring-black/10
                      "
                    >
                      <option value="men">Men</option>
                      <option value="women">Women</option>
                      <option value="unisex">Unisex</option>
                    </select>
                  </div>

                  {/* Style */}
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-800">
                      Style
                    </label>

                    <input
                      type="text"
                      name="style"
                      value={formData.style}
                      onChange={handleChange}
                      placeholder="e.g. Modern Minimalist"
                      className="
                        h-12 w-full rounded-xl
                        border border-gray-300
                        bg-white px-4
                        text-sm font-medium text-black
                        outline-none
                        transition-all
                        placeholder:text-gray-400
                        hover:border-gray-400
                        focus:border-black
                        focus:ring-2 focus:ring-black/10
                      "
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-gray-200" />

              {/* ================= IMAGES ================= */}

              <div className="mb-7">
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-5 w-1 rounded-full bg-black" />

                  <div>
                    <h3 className="text-sm font-bold text-black">
                      Product Images
                    </h3>

                    <p className="text-[11px] text-gray-400">
                      Add the main image and additional product images.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  {/* Main Image */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-800">
                      Main Image URL
                    </label>

                    <div className="relative">
                      <ImageIcon
                        size={17}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="url"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="https://example.com/image.jpg"
                        required
                        className="
                          h-12 w-full rounded-xl
                          border border-gray-300
                          bg-white pl-11 pr-4
                          text-sm font-medium text-black
                          outline-none
                          transition-all
                          placeholder:text-gray-400
                          hover:border-gray-400
                          focus:border-black
                          focus:ring-2 focus:ring-black/10
                        "
                      />
                    </div>
                  </div>

                  {/* Additional Images */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-800">
                      Additional Images
                    </label>

                    <input
                      type="text"
                      name="images"
                      value={formData.images}
                      onChange={handleChange}
                      placeholder="url1, url2, url3"
                      className="
                        h-12 w-full rounded-xl
                        border border-gray-300
                        bg-white px-4
                        text-sm font-medium text-black
                        outline-none
                        transition-all
                        placeholder:text-gray-400
                        hover:border-gray-400
                        focus:border-black
                        focus:ring-2 focus:ring-black/10
                      "
                    />

                    <p className="mt-1.5 text-[10px] text-gray-400">
                      Separate multiple URLs using commas.
                    </p>
                  </div>

                  {/* Description */}
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-800">
                      Description
                    </label>

                    <textarea
                      name="description"
                      rows="4"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Write a detailed product description..."
                      className="
                        w-full resize-none rounded-xl
                        border border-gray-300
                        bg-white p-4
                        text-sm font-medium text-black
                        outline-none
                        transition-all
                        placeholder:text-gray-400
                        hover:border-gray-400
                        focus:border-black
                        focus:ring-2 focus:ring-black/10
                      "
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-gray-200" />

              {/* ================= PRICING ================= */}

              <div className="mb-7">
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-5 w-1 rounded-full bg-black" />

                  <div>
                    <h3 className="text-sm font-bold text-black">
                      Pricing & Rating
                    </h3>

                    <p className="text-[11px] text-gray-400">
                      Set product pricing, discount and rating.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                  {/* Price */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-800">
                      Price ($)
                    </label>

                    <div className="relative">
                      <DollarSign
                        size={17}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="0.00"
                        required
                        className="
                          h-12 w-full rounded-xl
                          border border-gray-300
                          bg-white pl-10 pr-3
                          text-sm font-medium text-black
                          outline-none
                          transition-all
                          placeholder:text-gray-400
                          hover:border-gray-400
                          focus:border-black
                          focus:ring-2 focus:ring-black/10
                        "
                      />
                    </div>
                  </div>

                  {/* Original Price */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-800">
                      Original Price
                    </label>

                    <div className="relative">
                      <DollarSign
                        size={17}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="number"
                        name="originalPrice"
                        value={formData.originalPrice}
                        onChange={handleChange}
                        placeholder="0.00"
                        className="
                          h-12 w-full rounded-xl
                          border border-gray-300
                          bg-white pl-10 pr-3
                          text-sm font-medium text-black
                          outline-none
                          transition-all
                          placeholder:text-gray-400
                          hover:border-gray-400
                          focus:border-black
                          focus:ring-2 focus:ring-black/10
                        "
                      />
                    </div>
                  </div>

                  {/* Discount */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-800">
                      Discount
                    </label>

                    <div className="relative">
                      <Percent
                        size={17}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="number"
                        name="discount"
                        value={formData.discount}
                        onChange={handleChange}
                        placeholder="0"
                        className="
                          h-12 w-full rounded-xl
                          border border-gray-300
                          bg-white pl-10 pr-3
                          text-sm font-medium text-black
                          outline-none
                          transition-all
                          placeholder:text-gray-400
                          hover:border-gray-400
                          focus:border-black
                          focus:ring-2 focus:ring-black/10
                        "
                      />
                    </div>
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-800">
                      Rating
                    </label>

                    <div className="relative">
                      <Star
                        size={17}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="5"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        className="
                          h-12 w-full rounded-xl
                          border border-gray-300
                          bg-white pl-10 pr-3
                          text-sm font-medium text-black
                          outline-none
                          transition-all
                          hover:border-gray-400
                          focus:border-black
                          focus:ring-2 focus:ring-black/10
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-gray-200" />

              {/* ================= COLORS & TOP SELLING ================= */}

              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-5 w-1 rounded-full bg-black" />

                  <div>
                    <h3 className="text-sm font-bold text-black">
                      Product Options
                    </h3>

                    <p className="text-[11px] text-gray-400">
                      Configure colors and product visibility.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5">

                  {/* Colors */}
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-800">
                      Colors
                    </label>

                    <input
                      type="text"
                      name="colors"
                      value={formData.colors}
                      onChange={handleChange}
                      placeholder="#000000, #ffffff"
                      className="
                        h-12 w-full rounded-xl
                        border border-gray-300
                        bg-white px-4
                        text-sm font-medium text-black
                        outline-none
                        transition-all
                        placeholder:text-gray-400
                        hover:border-gray-400
                        focus:border-black
                        focus:ring-2 focus:ring-black/10
                      "
                    />

                    <p className="mt-1.5 text-[10px] text-gray-400">
                      Add hex color codes separated by commas.
                    </p>
                  </div>

                  {/* Top Selling */}
                  <label
                    htmlFor="isTopSelling"
                    className="
                      flex cursor-pointer items-center
                      justify-between gap-4
                      rounded-xl border border-gray-200
                      bg-gray-50 px-4 py-4
                      transition-all
                      hover:border-black hover:bg-white
                    "
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white">
                        <Star size={16} />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-black">
                          Top Selling Product
                        </p>

                        <p className="mt-0.5 text-[11px] text-gray-400">
                          Mark this product as a top-selling item.
                        </p>
                      </div>
                    </div>

                    <input
                      type="checkbox"
                      name="isTopSelling"
                      id="isTopSelling"
                      checked={formData.isTopSelling}
                      onChange={handleChange}
                      className="
                        h-5 w-5
                        cursor-pointer
                        rounded
                        border-gray-300
                        accent-black
                      "
                    />
                  </label>
                </div>
              </div>

              {/* Product Submit */}
              <div className="mt-8 flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <p className="text-xs font-semibold text-gray-700">
                    Product Listing
                  </p>

                  <p className="mt-1 text-[11px] text-gray-400">
                    Review the product information before adding it.
                  </p>
                </div>

                <button
                  type="submit"
                  className="
                    inline-flex h-11
                    items-center justify-center
                    gap-2 rounded-xl
                    bg-black px-7
                    text-sm font-bold text-white
                    shadow-sm
                    transition-all
                    hover:bg-gray-800
                    active:scale-[0.98]
                  "
                >
                  <PackagePlus size={16} />
                  Add Product
                </button>
              </div>
            </form>
          </section>

          {/* =====================================================
              FOOTER
          ====================================================== */}

          <div className="flex flex-col gap-2 border-t border-gray-200 px-1 pt-5 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] font-medium text-gray-400">
              Admin Control Panel
            </p>

            <div className="flex items-center gap-2 text-[11px] font-medium text-gray-400">
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
              System Ready
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminMange;