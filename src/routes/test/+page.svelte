<script lang="ts">
    let checkboxVal = $state(false);
    let rangeVal = $state(50);
    let toggleVal = $state(true);
    let modalOpen = $state(false);
</script>

<main class="max-w-screen-lg mx-auto px-8 py-10">
    <h1 class="text-4xl font-bold mb-2">Component Demos</h1>
    <p class="text-base-content/60 mb-10">A showcase of DaisyUI components available in this project.</p>

    <!-- Buttons -->
    <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4">Buttons</h2>
        <div class="flex flex-wrap gap-3">
            <button class="btn">Default</button>
            <button class="btn btn-primary">Primary</button>
            <button class="btn btn-secondary">Secondary</button>
            <button class="btn btn-accent">Accent</button>
            <button class="btn btn-warning">Warning</button>
            <button class="btn btn-error">Error</button>
            <button class="btn btn-success">Success</button>
            <button class="btn btn-outline btn-primary">Outline</button>
            <button class="btn btn-ghost">Ghost</button>
            <button class="btn btn-sm btn-primary">Small</button>
            <button class="btn btn-lg btn-primary">Large</button>
            <button class="btn btn-primary" disabled>Disabled</button>
        </div>
    </section>

    <!-- Cards -->
    <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4">Cards</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="card bg-neutral text-neutral-content">
                <div class="card-body">
                    <h3 class="card-title">Basic Card</h3>
                    <p>A simple card with some content.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary btn-sm">Action</button>
                    </div>
                </div>
            </div>
            <div class="card bg-primary text-primary-content">
                <div class="card-body">
                    <h3 class="card-title">Primary Card</h3>
                    <p>Card with primary background color.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-sm">Details</button>
                    </div>
                </div>
            </div>
            <div class="card bg-base-200">
                <div class="card-body">
                    <h3 class="card-title">Bordered Card</h3>
                    <p>Card with base background styling.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-accent btn-sm">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Form Inputs -->
    <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4">Form Inputs</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="form-control">
                <label class="label" for="text-input">
                    <span class="label-text">Text Input</span>
                </label>
                <input id="text-input" type="text" placeholder="Type something..." class="input input-bordered w-full" />
            </div>
            <div class="form-control">
                <label class="label" for="select-input">
                    <span class="label-text">Select</span>
                </label>
                <select id="select-input" class="select select-bordered w-full">
                    <option disabled selected>Pick one</option>
                    <option>Option A</option>
                    <option>Option B</option>
                    <option>Option C</option>
                </select>
            </div>
            <div class="form-control">
                <label class="label" for="textarea-input">
                    <span class="label-text">Textarea</span>
                </label>
                <textarea id="textarea-input" class="textarea textarea-bordered w-full" placeholder="Write more here..."></textarea>
            </div>
            <div class="space-y-4">
                <div class="form-control">
                    <label class="label cursor-pointer justify-start gap-3">
                        <input type="checkbox" class="checkbox checkbox-primary" bind:checked={checkboxVal} />
                        <span class="label-text">Checkbox: {checkboxVal ? 'Checked' : 'Unchecked'}</span>
                    </label>
                </div>
                <div class="form-control">
                    <label class="label cursor-pointer justify-start gap-3">
                        <input type="checkbox" class="toggle toggle-primary" bind:checked={toggleVal} />
                        <span class="label-text">Toggle: {toggleVal ? 'On' : 'Off'}</span>
                    </label>
                </div>
                <div class="form-control">
                    <label class="label">T
                        <span class="label-text">Range: {rangeVal}</span>
                    </label>
                    <input type="range" min="0" max="100" bind:value={rangeVal} class="range range-primary range-sm" />
                </div>
            </div>
        </div>
    </section>

    <!-- Alerts -->
    <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4">Alerts</h2>
        <div class="space-y-3">
            <div class="alert alert-info">
                <span>Info: This is an informational message.</span>
            </div>
            <div class="alert alert-success">
                <span>Success: Operation completed successfully.</span>
            </div>
            <div class="alert alert-warning">
                <span>Warning: Please review before proceeding.</span>
            </div>
            <div class="alert alert-error">
                <span>Error: Something went wrong.</span>
            </div>
        </div>
    </section>

    <!-- Badges -->
    <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4">Badges</h2>
        <div class="flex flex-wrap gap-3">
            <span class="badge">Default</span>
            <span class="badge badge-primary">Primary</span>
            <span class="badge badge-secondary">Secondary</span>
            <span class="badge badge-accent">Accent</span>
            <span class="badge badge-ghost">Ghost</span>
            <span class="badge badge-outline">Outline</span>
            <span class="badge badge-lg badge-primary">Large</span>
            <span class="badge badge-sm badge-secondary">Small</span>
        </div>
    </section>

    <!-- Modal -->
    <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4">Modal</h2>
        <button class="btn btn-primary" onclick={() => modalOpen = true}>Open Modal</button>
        {#if modalOpen}
            <div class="modal modal-open">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Modal Title</h3>
                    <p class="py-4">This is a modal dialog. Click the button below to close it.</p>
                    <div class="modal-action">
                        <button class="btn" onclick={() => modalOpen = false}>Close</button>
                    </div>
                </div>
                <div class="modal-backdrop" onclick={() => modalOpen = false}></div>
            </div>
        {/if}
    </section>

    <!-- Progress -->
    <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-4">Progress</h2>
        <div class="space-y-3 max-w-md">
            <progress class="progress progress-primary w-full" value="25" max="100"></progress>
            <progress class="progress progress-secondary w-full" value="50" max="100"></progress>
            <progress class="progress progress-accent w-full" value="75" max="100"></progress>
            <progress class="progress progress-success w-full" value="100" max="100"></progress>
        </div>
    </section>
</main>
