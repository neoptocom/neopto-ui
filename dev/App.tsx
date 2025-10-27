import { useState } from "react";
import {
  AppBackground,
  Button,
  Input,
  Typo,
  Avatar,
  AvatarGroup,
  Chip,
  Counter,
  Icon,
  IconButton,
  Autocomplete,
  Search,
  Skeleton,
  Modal,
  AgentButton,
} from "../src/index";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [counter, setCounter] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<{ label: string; value: string } | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const autocompleteOptions = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
    { label: "Date", value: "date" },
    { label: "Elderberry", value: "elderberry" },
  ];

  const searchData = [
    { id: 1, label: "React", value: "react", category: "Framework" },
    { id: 2, label: "Vue", value: "vue", category: "Framework" },
    { id: 3, label: "Angular", value: "angular", category: "Framework" },
    { id: 4, label: "TypeScript", value: "typescript", category: "Language" },
    { id: 5, label: "JavaScript", value: "javascript", category: "Language" },
  ];

  return (
    <AppBackground>
      <div className="p-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-4">
            <Typo variant="headline-lg" bold="bold">
              NeoPTO UI - Dev Playground
            </Typo>
            <Button onClick={toggleDarkMode} variant="secondary" size="sm">
              <Icon name={isDark ? "light_mode" : "dark_mode"} />
              {isDark ? "Light" : "Dark"} Mode
            </Button>
          </div>
          <Typo variant="body-md" className="text-text-secondary">
            Test and preview all components in real-time
          </Typo>
        </div>

        <div className="max-w-7xl mx-auto space-y-12">
        {/* Typography */}
        <Section title="Typography">
          <div className="space-y-2">
            <Typo variant="headline-lg" bold="bold">Headline Large Bold</Typo>
            <Typo variant="headline-md" bold="semibold">Headline Medium Semibold</Typo>
            <Typo variant="headline-sm">Headline Small</Typo>
            <Typo variant="body-lg">Body Large Text</Typo>
            <Typo variant="body-md">Body Medium Text</Typo>
            <Typo variant="body-sm">Body Small Text</Typo>
            <Typo variant="label-md" bold="medium">Label Medium</Typo>
          </div>
        </Section>

        {/* Buttons */}
        <Section title="Buttons">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm">Primary Small</Button>
            <Button variant="primary" size="md">Primary Medium</Button>
            <Button variant="primary" size="lg">Primary Large</Button>
            <Button variant="secondary" size="md">Secondary</Button>
            <Button variant="ghost" size="md">Ghost</Button>
            <Button variant="primary" size="md" disabled>Disabled</Button>
            <Button variant="primary" size="md">
              <Icon name="add" />
              With Icon
            </Button>
          </div>
        </Section>

        {/* IconButton */}
        <Section title="Icon Buttons">
          <div className="flex flex-wrap gap-4 items-center">
            <IconButton icon="favorite" variant="primary" size="sm" />
            <IconButton icon="favorite" variant="primary" size="md" />
            <IconButton icon="favorite" variant="primary" size="lg" />
            <IconButton icon="settings" variant="secondary" size="md" />
            <IconButton icon="delete" variant="ghost" size="md" />
            <IconButton icon="share" variant="primary" size="md" disabled />
          </div>
        </Section>

        {/* Agent Button */}
        <Section title="Agent Button">
          <div className="flex gap-4">
            <AgentButton 
              onOpenChat={() => alert("Agent opened!")}
              hasNotification={false}
            />
            <AgentButton 
              onOpenChat={() => alert("Agent opened!")}
              hasNotification={true}
              notificationMessage="New message!"
            />
          </div>
        </Section>

        {/* Input & Search */}
        <Section title="Input & Search">
          <div className="space-y-4 max-w-md">
            <Input
              placeholder="Enter text..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Input
              placeholder="Disabled input"
              disabled
            />
            <Search
              options={searchData}
              onSearch={(value) => setSearchValue(value)}
              selectedOption={null}
              onSelect={() => {}}
              searchDelay={300}
            />
          </div>
        </Section>

        {/* Autocomplete */}
        <Section title="Autocomplete">
          <div className="max-w-md">
            <Autocomplete
              title="Select a fruit"
              options={autocompleteOptions}
              selectedOption={selectedOption}
              onSelect={(option) => setSelectedOption(option as { label: string; value: string } | null)}
              placeholder="Choose a fruit..."
            />
            {selectedOption && (
              <Typo variant="body-sm" className="mt-2 text-text-secondary">
                Selected: {selectedOption.label}
              </Typo>
            )}
          </div>
        </Section>

        {/* Avatars */}
        <Section title="Avatars">
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <Avatar name="John Doe" size="sm" />
              <Avatar name="Jane Smith" size="md" />
              <Avatar name="Bob Johnson" />
              <Avatar name="Alice Williams" src="https://i.pravatar.cc/150?img=1" size="md" />
            </div>
            <AvatarGroup max={3}>
              <Avatar name="User 1" />
              <Avatar name="User 2" />
              <Avatar name="User 3" />
              <Avatar name="User 4" />
              <Avatar name="User 5" />
            </AvatarGroup>
          </div>
        </Section>

        {/* Counter */}
        <Section title="Counter">
          <div className="flex gap-4 items-center">
            <Counter
              value={counter}
              onChange={setCounter}
              min={0}
              max={10}
            />
            <Typo variant="body-md">Value: {counter}</Typo>
          </div>
        </Section>

        {/* Chips */}
        <Section title="Chips">
          <div className="flex flex-wrap gap-2">
            <Chip label="Light" variant="light" />
            <Chip label="Dark" variant="dark" />
            <Chip label="Success" variant="success" />
            <Chip label="Warning" variant="warning" />
            <Chip label="Error" variant="error" />
            <Chip label="With Icon" variant="dark" icon="star" />
          </div>
        </Section>

        {/* Icons */}
        <Section title="Icons">
          <div className="flex flex-wrap gap-4 items-center">
            <Icon name="home" size="sm" />
            <Icon name="favorite" size="md" />
            <Icon name="settings" size="lg" />
            <Icon name="search" size="md" className="text-primary-500" />
            <Icon name="notifications" size="lg" className="text-primary-500" />
            <Icon name="person" size="lg" className="text-success-500" />
          </div>
        </Section>

        {/* Modal */}
        <Section title="Modal">
          <div>
            <Button onClick={() => setModalOpen(true)} variant="primary">
              Open Modal
            </Button>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
              <div className="space-y-4">
                <Typo variant="headline-md" bold="semibold">
                  Modal Title
                </Typo>
                <Typo variant="body-md" className="text-text-secondary">
                  This is a modal dialog. You can put any content here. Click outside or press
                  ESC to close.
                </Typo>
                <div className="flex gap-2 justify-end">
                  <Button variant="ghost" onClick={() => setModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={() => setModalOpen(false)}>
                    Confirm
                  </Button>
                </div>
              </div>
            </Modal>
          </div>
        </Section>

        {/* Skeleton */}
        <Section title="Skeleton Loaders">
          <div className="space-y-4 max-w-md">
            <Skeleton style={{ width: "100%", height: "40px" }} />
            <Skeleton style={{ width: "80%", height: "24px" }} />
            <Skeleton style={{ width: "60%", height: "24px" }} />
            <div className="flex gap-2">
              <Skeleton rounded="full" style={{ width: "48px", height: "48px" }} />
              <div className="flex-1 space-y-2">
                <Skeleton style={{ width: "100%", height: "20px" }} />
                <Skeleton style={{ width: "80%", height: "16px" }} />
              </div>
            </div>
          </div>
        </Section>
        </div>

        {/* Footer */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border-primary">
          <Typo variant="body-sm" className="text-text-tertiary text-center">
            NeoPTO UI Component Library - Development Playground
          </Typo>
        </div>
      </div>
    </AppBackground>
  );
}

// Helper component for sections
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-background-secondary rounded-lg p-6 shadow-sm border border-border-primary gap-2">
      <Typo variant="headline-sm" bold="semibold" className="mb-4">
        {title}
      </Typo>
      {children}
    </div>
  );
}

export default App;

