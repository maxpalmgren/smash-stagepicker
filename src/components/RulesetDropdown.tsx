import { Listbox } from "@headlessui/react";
import { FC } from "react";

type Props = {
  rulesetList: string[];
  selectedRuleset: string;
  setSelectedruleset: () => void;
};

const RulesetDropdown: FC<Props> = ({
  selectedRuleset,
  rulesetList,
  setSelectedruleset,
}) => {
  return (
    <Listbox value={selectedRuleset} onChange={setSelectedruleset}>
      <Listbox.Button className="border w-max py-1 px-1 rounded-md hover:bg-slate-600">
        {selectedRuleset}
      </Listbox.Button>
      <Listbox.Options className="px-1 border rounded-md py-1 absolute bg-slate-800">
        {rulesetList.map((ruleset, i) => (
          <Listbox.Option
            key={`${ruleset}-${i}`}
            value={ruleset}
            className="hover:bg-slate-600 cursor-pointer"
          >
            {ruleset}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default RulesetDropdown;
