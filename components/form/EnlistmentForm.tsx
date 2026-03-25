"use client";
import { Form } from "@/components/form/form";
import { useForm } from "react-hook-form";
import { FormInput } from "./form-input";
import { FormSelect } from "./form-select";
// import { dateOptions, companyOptions, categoryOptions, countryOptions } from "@/constants/buyer.inbox.constants";

// Define the form data type
interface EnlistmentFormData {
  search: string;
  mobileFilter: string;
  date: string;
  company: string;
  category: string;
  country: string;
}

const EnlistmentForm = () => {
  // Initialize react-hook-form
  const form = useForm<EnlistmentFormData>({
    defaultValues: {
      search: "",
      mobileFilter: "",
      date: "",
      company: "",
      category: "",
      country: "",
    }
  });

  return (
    <Form {...form}>
      <div className="w-full mx-auto px-1 py-1 sm:px-4 space-y-2 sm:space-y-6">     
        {/* Search and Filter Form */}
        <div className="grid grid-cols-2 gap-1 sm:gap-4 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Search Input with Search Icon */}
          <FormInput
            control={form.control}
            name="search"
            placeholder="Search..."
            showSearchIcon={true} // Ensure this prop is passed
          />

          {/* Mobile Filter Dropdown with Filter Icon */}
          <div className="col-span-1 md:hidden">
            <FormSelect
              control={form.control}
              name="mobileFilter"
              placeholder="Filter By"
              options={[
                { value: "date", label: "Filter by Date" },
                { value: "company", label: "Filter by Company" },
                { value: "category", label: "Filter by Category" },
                { value: "country", label: "Filter by Country" }
              ]}
              showFilterIcon={true} // Ensure this prop is passed
              className="py-1 text-[10px]"
            />
          </div>

          {/* Filter by Date with Filter Icon - Only show on medium+ devices */}
          <div className="hidden md:block">
            <FormSelect
              control={form.control}
              name="date"
              placeholder="Filter by Date"
              options={[
                { value: "date", label: "Filter by Date" },
                { value: "company", label: "Filter by Company" },
                { value: "category", label: "Filter by Category" },
                { value: "country", label: "Filter by Country" }
              ]}
              showFilterIcon={true} // Ensure this prop is passed
              className="py-1 sm:py-2 text-[10px] sm:text-sm"
            />
          </div>

          {/* Filter by Company Name with Filter Icon - Only show on medium+ devices */}
          <div className="hidden md:block">
            <FormSelect
              control={form.control}
              name="company"
              placeholder="Filter by Company"
              options={[
                { value: "date", label: "Filter by Date" },
                { value: "company", label: "Filter by Company" },
                { value: "category", label: "Filter by Category" },
                { value: "country", label: "Filter by Country" }
              ]}
              showFilterIcon={true} // Ensure this prop is passed
              className="py-1 sm:py-2 text-[10px] sm:text-sm"
            />
          </div>

          {/* Filter by Category with Filter Icon - Only show on medium+ devices */}
          <div className="hidden md:block">
            <FormSelect
              control={form.control}
              name="category"
              placeholder="Filter by Category"
              options={[
                { value: "date", label: "Filter by Date" },
                { value: "company", label: "Filter by Company" },
                { value: "category", label: "Filter by Category" },
                { value: "country", label: "Filter by Country" }
              ]}
              showFilterIcon={true} // Ensure this prop is passed
              className="py-1 sm:py-2 text-[10px] sm:text-sm"
            />
          </div>

          {/* Filter by Country with Filter Icon - Only show on medium+ devices */}
          <div className="hidden md:block">
            <FormSelect
              control={form.control}
              name="country"
              placeholder="Filter by Country"
              options={[
                { value: "date", label: "Filter by Date" },
                { value: "company", label: "Filter by Company" },
                { value: "category", label: "Filter by Category" },
                { value: "country", label: "Filter by Country" }
              ]}
              showFilterIcon={true} // Ensure this prop is passed
              className="py-1 sm:py-2 text-[10px] sm:text-sm"
            />
          </div>
        </div>
      </div>
    </Form>
  );
};

export default EnlistmentForm;