export default function Sidebar() {
  return (
    <div className="flex">
      <div className="h-full bg-[#0b1f3d] shadow w-10">
        <div className="space-y-3">
          <div className="flex items-center"></div>
          <div></div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <a
                  href=""
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <box-icon
                    color="white"
                    type="logo"
                    name="linkedin-square"
                  ></box-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
