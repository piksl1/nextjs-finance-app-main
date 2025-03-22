import PageHeader from "@/components/page-header";

export default function Layout({ children }) {
  return (
    <>
      <PageHeader className="my-8" />
      <main>{children}</main>
      <footer className="mt-auto py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} FinancePro. All rights
                reserved.
              </span>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
              >
                Help
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
